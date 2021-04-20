import {
  Directive,
  Input,
  HostListener,
  ElementRef,
  ChangeDetectorRef,
  Output,
  EventEmitter,
  TemplateRef,
} from '@angular/core';
import { IPopoverRef } from '../core/popover/popover-ref';
import { UiKitPopoverService } from '../core/popover/popover.service';
import { DropdownComponent } from './dropdown.component';
import { take } from 'rxjs/operators';
import {
  IDropdownConfig,
  DropdownActionOrigin,
} from './dropdown-config.interface';

@Directive({
  selector: '[uikitDropdown]',
  /* tslint:disable-next-line */
  host: {
    '[class.uikit-dropdown-open]': 'isOpen',
  },
  exportAs: 'dropdown',
})
export class UiKitDropdownDirective {
  dropdownRef: IPopoverRef<DropdownComponent> | undefined;

  @Input('uikitDropdown')
  public content: TemplateRef<any> | undefined;

  @Input()
  public dropdownConfig: IDropdownConfig | undefined;

  @Input()
  public dropdownDisabled = false;

  @Output()
  public dropdownOpened = new EventEmitter();

  @Output()
  public dropdownClosed = new EventEmitter();

  @Input()
  public openTrigger: () => Promise<void> = () => Promise.resolve();

  @HostListener('click')
  click(): void {
    if (this.dropdownDisabled) {
      return;
    }
    this.dropdownConfig = Object.assign(
      { autoClose: true, showLeaf: true, hasBackdrop: true } as IDropdownConfig,
      this.dropdownConfig
    );
    this.openTrigger().then(
      () => {
        if (!this.content) {
          return;
        }
        this.dropdownRef = this.popover.open(
          DropdownComponent,
          this.element.nativeElement,
          this.content,
          this.dropdownConfig
        );
        this.dropdownRef.afterClosed.subscribe({
          next: () => {
            this.dropdownClosed.emit();
          },
          complete: () => {
            this.dropdownRef = undefined;
            this.cd.markForCheck();
          },
        });
        this.dropdownOpened.emit();

        this.dropdownRef.overlay
          .backdropClick()
          .pipe(take(1))
          .subscribe(() => {
            if (this.canClose('outside')) {
              this.close();
            }
          });
        this.dropdownRef.containerInstance?.clicked
          .pipe(take(1))
          .subscribe(() => {
            if (this.canClose('inside')) {
              this.close();
            }
          });
      },
      () => {}
    );
  }

  get isOpen(): boolean {
    return !!(this.dropdownRef && this.dropdownRef.isOpen);
  }

  constructor(
    protected readonly popover: UiKitPopoverService,
    protected readonly element: ElementRef,
    private readonly cd: ChangeDetectorRef
  ) {}

  private canClose(origin: DropdownActionOrigin): boolean {
    return (
      this.dropdownConfig?.autoClose === true ||
      this.dropdownConfig?.autoClose === origin
    );
  }

  close(): void {
    if (this.dropdownRef) {
      this.dropdownRef.close();
    }
  }
}
