import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateTokensPipe } from '@vex/pipes/date-tokens/date-tokens.pipe';

@NgModule({
  declarations: [DateTokensPipe],
  exports: [DateTokensPipe],
  imports: [CommonModule],
})
export class DateTokensModule {
}
