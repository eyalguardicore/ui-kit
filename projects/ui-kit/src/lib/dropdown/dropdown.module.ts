import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiKitDropdownDirective } from './dropdown.directive';
import { DropdownComponent } from './dropdown.component';
import { UiKitPopoverModule } from '../core/popover/popover.module';

@NgModule({
  declarations: [UiKitDropdownDirective, DropdownComponent],
  imports: [CommonModule, UiKitPopoverModule],
  exports: [UiKitDropdownDirective],
  entryComponents: [DropdownComponent],
})
export class UiKitDropdownModule {}
