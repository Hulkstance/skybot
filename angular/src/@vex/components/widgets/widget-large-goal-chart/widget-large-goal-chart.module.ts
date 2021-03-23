import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';

import { ChartModule, WidgetLargeGoalChartComponent } from '@vex';

@NgModule({
  declarations: [WidgetLargeGoalChartComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    IconModule,
    ChartModule
  ],
  exports: [WidgetLargeGoalChartComponent]
})
export class WidgetLargeGoalChartModule {
}
