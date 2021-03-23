import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Icon } from '@visurel/iconify-angular';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import icShare from '@iconify/icons-ic/twotone-share';
import { scaleInOutAnimation } from '@vex/animations/scale-in-out.animation';

import { ApexOptions } from '@vex/components/chart/chart.component';
import { defaultChartOptions } from '@vex/utils/default-chart-options';
import { ShareBottomSheetComponent } from '@vex/components/share-bottom-sheet/share-bottom-sheet.component';

@Component({
  selector: 'vex-widget-quick-line-chart',
  templateUrl: './widget-quick-line-chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [scaleInOutAnimation]
})
export class WidgetQuickLineChartComponent implements OnInit {

  @Input() icon: Icon;
  @Input() value: string;
  @Input() label: string;
  @Input() iconClass: string;
  @Input() options: ApexOptions = defaultChartOptions({
    chart: {
      type: 'area',
      height: 100
    }
  });
  @Input() series: ApexNonAxisChartSeries | ApexAxisChartSeries;

  showButton: boolean;

  icShare = icShare;

  constructor(private _bottomSheet: MatBottomSheet) {
  }

  ngOnInit() {
  }

  openSheet() {
    this._bottomSheet.open(ShareBottomSheetComponent);
  }
}

