import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartComponent } from '@vex';

@NgModule({
  declarations: [ChartComponent],
  imports: [CommonModule],
  exports: [ChartComponent]
})
export class ChartModule {
}
