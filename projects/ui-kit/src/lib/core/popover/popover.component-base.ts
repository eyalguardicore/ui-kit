import {
  EventEmitter,
  ChangeDetectorRef,
  TemplateRef,
} from '@angular/core';
import { PopoverRef } from './popover-ref';
import { IOverlayConfig } from './interfaces';
import { AnimationEvent } from '@angular/animations';
import { Observable } from 'rxjs';

export interface IAnimatedAttachedComponent {
  animationStateChanged: Observable<AnimationEvent>;
  startExitAnimation: () => void;
}

export abstract class AnimatedPopoverBase
  implements IAnimatedAttachedComponent {
  animationState: 'void' | 'enter' | 'leave' = 'enter';
  animationStateChanged = new EventEmitter<AnimationEvent>();

  constructor(protected cdr: ChangeDetectorRef) {}

  onAnimationStart(event: AnimationEvent): void {
    this.animationStateChanged.emit(event);
  }

  onAnimationDone(event: AnimationEvent): void {
    this.animationStateChanged.emit(event);
  }

  startExitAnimation(): void {
    this.animationState = 'leave';
    this.cdr.markForCheck();
  }
}

export abstract class PopoverComponent<
  TConfig extends IOverlayConfig = IOverlayConfig,
  TContent extends TemplateRef<any> | string = TemplateRef<any>
> extends AnimatedPopoverBase {
  config: TConfig;
  content: TContent;

  constructor(
    popoverRef: PopoverRef<PopoverComponent>,
    protected cdr: ChangeDetectorRef
  ) {
    super(cdr);
    this.content = popoverRef.content;
    this.config = popoverRef.config as TConfig;
  }
}
