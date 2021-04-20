import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyPopoverComponent } from './my-popover/my-popover.component';
import { UiKitPopoverModule } from 'projects/ui-kit/src/lib/core/popover/popover.module';
import { UiKitDropdownModule, UiKitTooltipModule } from 'projects/ui-kit/src/public-api';

@NgModule({
  declarations: [AppComponent, MyPopoverComponent],
  imports: [
    UiKitPopoverModule,
    UiKitTooltipModule,
    UiKitDropdownModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
