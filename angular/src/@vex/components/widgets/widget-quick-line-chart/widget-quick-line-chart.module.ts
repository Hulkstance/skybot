import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { MatButtonModule } from '@angular/material/button';

import { ChartModule, ShareBottomSheetModule, WidgetQuickLineChartComponent } from '@vex';

@NgModule({
  declarations: [WidgetQuickLineChartComponent],
  imports: [
    CommonModule,
    ChartModule,
    MatIconModule,
    FlexLayoutModule,
    IconModule,
    ShareBottomSheetModule,
    MatButtonModule
  ],
  exports: [WidgetQuickLineChartComponent]
})
export class WidgetQuickLineChartModule {
}

