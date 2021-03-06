import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';

import { ToolbarSearchComponent } from '@vex/layout/toolbar/toolbar-search/toolbar-search.component';

@NgModule({
  declarations: [ToolbarSearchComponent],
  imports: [
    CommonModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    IconModule
  ],
  exports: [ToolbarSearchComponent]
})
export class ToolbarSearchModule {
}
