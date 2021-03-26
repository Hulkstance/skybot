import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelativeDateTimePipe } from '@vex/pipes/relative-date-time/relative-date-time.pipe';

@NgModule({
  declarations: [RelativeDateTimePipe],
  imports: [CommonModule],
  exports: [RelativeDateTimePipe]
})
export class RelativeDateTimeModule {
}
