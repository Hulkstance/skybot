import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutComponent, PageLayoutContentDirective, PageLayoutHeaderDirective } from '@vex';

@NgModule({
  imports: [CommonModule],
  declarations: [PageLayoutComponent, PageLayoutHeaderDirective, PageLayoutContentDirective],
  exports: [PageLayoutComponent, PageLayoutHeaderDirective, PageLayoutContentDirective]
})
export class PageLayoutModule {
}
