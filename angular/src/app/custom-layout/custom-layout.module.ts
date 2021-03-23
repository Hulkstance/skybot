import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomLayoutComponent } from './custom-layout.component';
import { ConfigPanelModule } from '@vex/components/config-panel/config-panel.module';
import { SidebarModule } from '@vex/components/sidebar/sidebar.module';
import { LayoutModule } from '@vex/layout/layout.module';
import { ToolbarModule } from '@vex/layout/toolbar/toolbar.module';
import { FooterModule } from '@vex/layout/footer/footer.module';
import { QuickPanelModule } from '@vex/layout/quick-panel/quick-panel.module';
import { SidenavModule } from '@vex/layout/sidenav/sidenav.module';

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
