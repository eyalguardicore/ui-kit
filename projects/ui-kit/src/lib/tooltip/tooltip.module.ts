import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiKitTooltipDirective } from './tooltip.directive';
import { TooltipComponent } from './tooltip.component';
import { UiKitPopoverModule } from '../core/popover/popover.module';

@NgModule({
  declarations: [UiKitTooltipDirective, TooltipComponent],
  imports: [CommonModule, UiKitPopoverModule, CommonModule],
  exports: [UiKitTooltipDirective],
  entryComponents: [TooltipComponent],
})
export class UiKitTooltipModule {}
