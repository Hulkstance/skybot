import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { IconModule } from '@visurel/iconify-angular';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from '@vex/layout/toolbar/toolbar.component';
import { ToolbarNotificationsModule } from '@vex/layout/toolbar/toolbar-notifications/toolbar-notifications.module';
import { ToolbarUserModule } from '@vex/layout/toolbar/toolbar-user/toolbar-user.module';
import { ToolbarSearchModule } from '@vex/layout/toolbar/toolbar-search/toolbar-search.module';
import { NavigationModule } from '@vex/layout/navigation/navigation.module';
import { NavigationItemModule } from '@vex/components/navigation-item/navigation-item.module';
import { ContainerModule } from '@vex/directives/container/container.module';
import { MegaMenuModule } from '@vex/components/mega-menu/mega-menu.module';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatRippleModule,
    ToolbarNotificationsModule,
    ToolbarUserModule,
    ToolbarSearchModule,
    IconModule,
    NavigationModule,
    RouterModule,
    NavigationItemModule,
    MegaMenuModule,
    ContainerModule
  ],
  exports: [ToolbarComponent]
})
export class ToolbarModule {
}
