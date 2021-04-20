// tslint:disable: variable-name
import { OverlayRef } from '@angular/cdk/overlay';
import { Observable, Subject } from 'rxjs';
import { IAnimatedAttachedComponent } from './popover.component-base';
import { filter, take } from 'rxjs/operators';
export class AttachedComponentRef<
  TComp extends IAnimatedAttachedComponent,
  TRes = any
> {
  public containerInstance: TComp | undefined;
  protected _beforeClosed = new Subject<TRes>();
  protected _afterClosed = new Subject<TRes>();
  public isOpen = true;
  constructor(public overlay: OverlayRef) {}
  protected fireBeforeClose(): void {
    this._beforeClosed.next();
    this._beforeClosed.complete();
  }
  protected fireAfterClosed(): void {
    this._afterClosed.next();
    this._afterClosed.complete();
  }
  public close(): void {
    if (!this.containerInstance) {
      throw Error(`Can't close ref. Make sure containerInstance is set'`);
    }
    this.containerInstance.animationStateChanged
      .pipe(
        filter((event) => event.phaseName === 'start'),
        take(1)
      )
      .subscribe(() => {
        this.fireBeforeClose();
        this.overlay.detachBackdrop();
      });
    this.containerInstance.animationStateChanged
      .pipe(
        filter(
          (event) => event.phaseName === 'done' && event.toState === 'leave'
        ),
        take(1)
      )
      .subscribe(() => {
        this.overlay.dispose();
        this.fireAfterClosed();
        this.isOpen = false;
        this.containerInstance = undefined;
      });
    this.containerInstance.startExitAnimation();
  }
  public get afterClosed(): Observable<TRes> {
    return this._afterClosed.asObservable();
  }
  public get beforeClose(): Observable<TRes> {
    return this._beforeClosed.asObservable();
  }
}
