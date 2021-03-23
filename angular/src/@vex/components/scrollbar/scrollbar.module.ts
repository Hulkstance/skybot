import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollbarComponent } from '@vex';

@NgModule({
  declarations: [ScrollbarComponent],
  imports: [
    CommonModule
  ],
  exports: [ScrollbarComponent]
})
export class ScrollbarModule {
}
