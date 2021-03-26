import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { MatButtonModule } from '@angular/material/button';

import { WidgetQuickLineChartComponent } from '@vex/components/widgets/widget-quick-line-chart/widget-quick-line-chart.component';
import { ChartModule } from '@vex/components/chart/chart.module';
import { ShareBottomSheetModule } from '@vex/components/share-bottom-sheet/share-bottom-sheet.module';

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

