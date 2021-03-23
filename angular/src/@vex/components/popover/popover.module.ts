import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { PopoverComponent } from '@vex';

@NgModule({
  declarations: [PopoverComponent],
  imports: [
    CommonModule,
    OverlayModule
  ],
  entryComponents: [PopoverComponent]
})
export class PopoverModule {
}
