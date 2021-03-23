import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';

import { QuickPanelComponent } from './quick-panel.component';

@NgModule({
  declarations: [QuickPanelComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatProgressBarModule,
    RouterModule,
    MatRippleModule
  ],
  exports: [QuickPanelComponent]
})
export class QuickPanelModule {
}
