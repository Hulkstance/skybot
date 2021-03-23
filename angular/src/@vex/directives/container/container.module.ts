import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerDirective } from '@vex';

@NgModule({
  declarations: [ContainerDirective],
  imports: [CommonModule],
  exports: [ContainerDirective]
})
export class ContainerModule {
}
