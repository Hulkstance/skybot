import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';

import { BreadcrumbComponent, BreadcrumbsComponent } from '@vex';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    FlexLayoutModule,
    IconModule
  ],
  declarations: [BreadcrumbsComponent, BreadcrumbComponent],
  exports: [BreadcrumbsComponent]
})
export class BreadcrumbsModule {
}
