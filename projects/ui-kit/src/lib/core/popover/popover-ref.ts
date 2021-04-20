import { OverlayRef } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';
import { IPopoverConfig } from './interfaces';
import { TemplateRef } from '@angular/core';
import { AnimatedPopoverBase, IAnimatedAttachedComponent } from './popover.component-base';
import { AttachedComponentRef } from './attached-component-ref';

export type PopoverContent = TemplateRef<any> | string;

export interface IPopoverRef<TComp extends IAnimatedAttachedComponent = any, TRes = void> {
  containerInstance: TComp | undefined;
  overlay: OverlayRef;
  close: () => void;
  afterClosed: Observable<TRes>;
  beforeClose: Observable<TRes>;
  isOpen: boolean;
}

export class PopoverRef<TComp extends AnimatedPopoverBase, TContent = any, TRes = void>
  extends AttachedComponentRef<TComp, TRes>
  implements IPopoverRef<TComp, TRes> {
  constructor(public overlay: OverlayRef, public content: TContent, public config: IPopoverConfig) {
    super(overlay);
  }
}
