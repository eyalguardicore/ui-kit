import {
  Component,
  ViewEncapsulation,
  EventEmitter,
  Output,
  ChangeDetectorRef,
} from '@angular/core';
import { IPopoverConfig } from '../core';
import { fadeInOut } from '../core/animations/fade-in-out';
import { PopoverRef } from '../core/popover/popover-ref';
import { PopoverComponent } from '../core/popover/popover.component-base';

@Component({
  selector: 'uikit-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  animations: [fadeInOut],
})
export class DropdownComponent extends PopoverComponent<IPopoverConfig> {
  @Output()
  public clicked = new EventEmitter();

  constructor(
    popoverRef: PopoverRef<DropdownComponent>,
    cdr: ChangeDetectorRef
  ) {
    super(popoverRef, cdr);
  }

  fireClose(): void {
    this.clicked.emit();
  }
}
