import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { BreadcrumbsModule } from '@vex/components/breadcrumbs/breadcrumbs.module';
import { SecondaryToolbarComponent } from '@vex/components/secondary-toolbar/secondary-toolbar.component';
import { ContainerModule } from '@vex/directives/container/container.module';

@NgModule({
  declarations: [SecondaryToolbarComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    IconModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    BreadcrumbsModule,
    ContainerModule
  ],
  exports: [SecondaryToolbarComponent]
})
export class SecondaryToolbarModule {
}

