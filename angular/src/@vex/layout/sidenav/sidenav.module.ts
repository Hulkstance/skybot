import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';

import { SidenavComponent } from '@vex/layout/sidenav/sidenav.component';
import { SidenavItemModule } from '@vex/layout/sidenav/sidenav-item/sidenav-item.module';
import { ScrollbarModule } from '@vex/components/scrollbar/scrollbar.module';

@NgModule({
  declarations: [SidenavComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    SidenavItemModule,
    ScrollbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    IconModule
  ],
  exports: [SidenavComponent]
})
export class SidenavModule {
}
