import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { IconModule } from '@visurel/iconify-angular';

import { PopoverModule } from '@vex/components/popover/popover.module';
import { RelativeDateTimeModule } from '@vex/pipes/relative-date-time/relative-date-time.module';
import { ToolbarNotificationsComponent } from '@vex/layout/toolbar/toolbar-notifications/toolbar-notifications.component';
import { ToolbarNotificationsDropdownComponent } from '@vex/layout/toolbar/toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component';

@NgModule({
  declarations: [
    ToolbarNotificationsComponent,
    ToolbarNotificationsDropdownComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    PopoverModule,
    FlexLayoutModule,
    MatTabsModule,
    MatMenuModule,
    RelativeDateTimeModule,
    RouterModule,
    MatRippleModule,
    IconModule
  ],
  exports: [ToolbarNotificationsComponent],
  entryComponents: [ToolbarNotificationsDropdownComponent]
})
export class ToolbarNotificationsModule {
}
