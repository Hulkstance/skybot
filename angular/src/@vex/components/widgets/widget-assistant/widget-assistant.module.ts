import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';

import { WidgetAssistantComponent } from '@vex';

@NgModule({
  declarations: [WidgetAssistantComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    IconModule
  ],
  exports: [WidgetAssistantComponent]
})
export class WidgetAssistantModule {
}
