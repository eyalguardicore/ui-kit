import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  TemplateRef,
} from '@angular/core';
import { PopoverComponent } from '../core/popover/popover.component-base';
import { PopoverRef } from '../core/popover/popover-ref';
import { fadeInOut } from '../core/animations/fade-in-out';

@Component({
  selector: 'uikit-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOut],
})
export class TooltipComponent extends PopoverComponent {
  public get isTemplate(): boolean {
    return this.content && this.content instanceof TemplateRef;
  }

  constructor(
    popoverRef: PopoverRef<TooltipComponent>,
    cdr: ChangeDetectorRef
  ) {
    super(popoverRef, cdr);
  }
}
