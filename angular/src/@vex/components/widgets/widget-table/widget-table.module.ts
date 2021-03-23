import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';

import { WidgetTableComponent } from '@vex/components/widgets/widget-table/widget-table.component';

@NgModule({
  declarations: [WidgetTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    IconModule
  ],
  exports: [WidgetTableComponent]
})
export class WidgetTableModule {
}
