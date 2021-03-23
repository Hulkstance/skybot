import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

import { WidgetQuickValueStartComponent } from '@vex/components/widgets/widget-quick-value-start/widget-quick-value-start.component';
import { ShareBottomSheetModule } from '@vex/components/share-bottom-sheet/share-bottom-sheet.module';

@NgModule({
  declarations: [WidgetQuickValueStartComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    IconModule,
    MatTooltipModule,
    MatButtonModule,
    ShareBottomSheetModule
  ],
  exports: [WidgetQuickValueStartComponent]
})
export class WidgetQuickValueStartModule {
}

