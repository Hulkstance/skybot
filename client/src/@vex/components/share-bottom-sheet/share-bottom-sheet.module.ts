import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';

import { ShareBottomSheetComponent } from '@vex/components/share-bottom-sheet/share-bottom-sheet.component';

@NgModule({
  declarations: [ShareBottomSheetComponent],
  imports: [
    CommonModule,
    MatBottomSheetModule,
    MatListModule,
    RouterModule,
    MatIconModule,
    IconModule
  ],
  exports: [
    MatBottomSheetModule
  ],
  entryComponents: [ShareBottomSheetComponent]
})
export class ShareBottomSheetModule {
}
