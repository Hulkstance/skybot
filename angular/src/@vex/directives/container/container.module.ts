import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerDirective } from '@vex/directives/container/container.directive';

@NgModule({
  declarations: [ContainerDirective],
  imports: [CommonModule],
  exports: [ContainerDirective]
})
export class ContainerModule {
}
