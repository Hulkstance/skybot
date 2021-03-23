import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { IconModule } from '@visurel/iconify-angular';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ChartModule, WidgetLargeChartComponent } from '@vex';

@NgModule({
  declarations: [WidgetLargeChartComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    IconModule,
    FlexLayoutModule,
    ChartModule
  ],
  exports: [WidgetLargeChartComponent]
})
export class WidgetLargeChartModule {
}
