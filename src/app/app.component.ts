import { Component, ElementRef, ViewChild } from '@angular/core';
import { IPopoverRef, UiKitPopoverService } from 'projects/ui-kit/src/lib/core';
import { MyPopoverComponent } from './my-popover/my-popover.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ui-kit';
  @ViewChild('target') private popoverTarget: ElementRef<any> | undefined;

  public popoverRef: IPopoverRef<MyPopoverComponent> | undefined;

  constructor(private popoverService: UiKitPopoverService) {}

  public togglePopover(): void {
    if (!this.popoverRef) {
      this.open();
    } else {
      this.close();
    }
  }

  private open(): void {
    if (!this.popoverTarget) {
      return;
    }
    this.popoverRef = this.popoverService.open(
      MyPopoverComponent,
      this.popoverTarget,
      `I'm a lonely popover`,
      { positions: [{ name: 'endCenter' }, { name: 'startCenter' }] }
    );
  }

  private close(): void {
    this.popoverRef?.close();
    this.popoverRef = undefined;
  }
}
