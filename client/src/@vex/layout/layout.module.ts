import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

import { LayoutComponent } from './layout.component';
import { ProgressBarModule } from '@vex/components/progress-bar/progress-bar.module';
import { SearchModule } from '@vex/components/search/search.module';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    ProgressBarModule,
    SearchModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule {
}
