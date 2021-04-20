import {
  Directive,
  Input,
  ElementRef,
  HostListener,
  NgZone,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IPopoverRef, PopoverContent } from '../core/popover/popover-ref';
import { TooltipComponent } from './tooltip.component';
import { Subject, fromEvent, of, noop } from 'rxjs';
import { takeUntil, tap, delay, mergeMap } from 'rxjs/operators';
import { IPoint } from '../shared/interfaces/point';
import { IPopoverConfig, UiKitPopoverService } from '../core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[uikitTooltip]',
  exportAs: 'tooltip',
})
export class UiKitTooltipDirective implements OnInit, OnDestroy {
  tooltipRef: IPopoverRef<TooltipComponent> | undefined;

  private destroy = new Subject();
  private showTooltip = false;
  private currentPosition: IPoint | undefined;

  @Input('uikitTooltip')
  public content: PopoverContent | undefined;

  @Input()
  public tooltipConfig: IPopoverConfig | undefined;

  @Input()
  public tooltipDisabled = false;

  private mouseMoveHandler = this.setCurrentPosition.bind(this);

  public show(): void {
    if (this.tooltipDisabled || !this.currentPosition || !this.content) {
      return;
    }
    this.showTooltip = true;
    this.tooltipConfig = Object.assign(
      {
        position: {
          definitions: [
            { name: 'bottomStart', offsetX: 18 },
            { name: 'bottomEnd', offsetX: -18 },
          ],
        },
      } as IPopoverConfig,
      this.tooltipConfig
    );
    this.tooltipRef = this.popover.open(
      TooltipComponent,
      this.currentPosition,
      this.content,
      this.tooltipConfig
    );
  }

  @HostListener('mouseleave')
  public hide(): void {
    if (!this.showTooltip) {
      return;
    }
    this.showTooltip = false;
    this.currentPosition = undefined;
    this.tooltipRef?.close();
  }

  constructor(
    public readonly popover: UiKitPopoverService,
    public readonly element: ElementRef<HTMLElement>,
    private zone: NgZone
  ) {}

  ngOnInit(): void {
    this.startListening();
  }

  ngOnDestroy(): void {
    this.releaseMouseMove();
    this.destroy.next();
    this.destroy.complete();
  }

  private captureMouseMove(): void {
    this.zone.runOutsideAngular(() => {
      this.element.nativeElement.addEventListener(
        'mousemove',
        this.mouseMoveHandler
      );
    });
  }

  private releaseMouseMove(): void {
    this.element.nativeElement.removeEventListener(
      'mousemove',
      this.mouseMoveHandler
    );
  }

  private setCurrentPosition(ev: MouseEvent): void {
    this.currentPosition = { x: ev.clientX + 10, y: ev.clientY - 40 };
  }

  private startListening(): void {
    this.zone.runOutsideAngular(() => {
      const mouseLeave = fromEvent<MouseEvent>(
        this.element.nativeElement,
        'mouseleave'
      ).pipe(
        tap(() => {
          this.releaseMouseMove();
        })
      );
      const mouseEnter = fromEvent<MouseEvent>(
        this.element.nativeElement,
        'mouseenter'
      ).pipe(
        tap((ev) => {
          this.setCurrentPosition(ev);
          this.captureMouseMove();
        })
      );

      mouseEnter
        .pipe(
          mergeMap((e) => {
            return of(e).pipe(delay(400), takeUntil(mouseLeave));
          }),
          takeUntil(this.destroy)
        )
        .subscribe(
          () => {
            this.zone.run(() => {
              this.show();
            });
          },
          noop,
          () => {
            this.zone.run(() => {
              this.hide();
            });
          }
        );
    });
  }
}
