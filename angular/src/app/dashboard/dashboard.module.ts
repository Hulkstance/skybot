import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    DashboardRoutingModule
  ],
  declarations: []
})
export class DashboardModule {
}
