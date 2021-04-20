import { ChangeDetectorRef, Component } from '@angular/core';
import {
  fadeInOut,
  PopoverComponent,
  PopoverRef,
} from 'projects/ui-kit/src/lib/core';

@Component({
  selector: 'app-my-popover',
  templateUrl: './my-popover.component.html',
  styleUrls: ['./my-popover.component.scss'],
  animations: [fadeInOut],
})
export class MyPopoverComponent extends PopoverComponent<any> {
  constructor(
    popoverRef: PopoverRef<MyPopoverComponent>,
    cdr: ChangeDetectorRef
  ) {
    super(popoverRef, cdr);
  }
}
