import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchComponent } from '@vex';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    IconModule,
    ReactiveFormsModule
  ],
  exports: [SearchComponent]
})
export class SearchModule {
}
