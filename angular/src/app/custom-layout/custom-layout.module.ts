import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLayoutComponent } from './custom-layout.component';

import { ConfigPanelModule, FooterModule, LayoutModule, QuickPanelModule, SidebarModule, SidenavModule, ToolbarModule } from '@vex';

@NgModule({
  declarations: [CustomLayoutComponent],
  imports: [
    CommonModule,
    LayoutModule,
    SidenavModule,
    ToolbarModule,
    FooterModule,
    ConfigPanelModule,
    SidebarModule,
    QuickPanelModule
  ]
})
export class CustomLayoutModule {
}
