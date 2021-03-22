import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';

import { QuickpanelComponent } from './quickpanel.component';

@NgModule({
  declarations: [QuickpanelComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatProgressBarModule,
    RouterModule,
    MatRippleModule
  ],
  exports: [QuickpanelComponent]
})
export class QuickpanelModule { }
