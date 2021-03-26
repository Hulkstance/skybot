import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'vex-quick-panel',
  templateUrl: './quick-panel.component.html',
  styleUrls: ['./quick-panel.component.scss']
})
export class QuickPanelComponent implements OnInit {

  date = DateTime.local().toFormat('DD');
  dayName = DateTime.local().toFormat('EEEE');

  constructor() {
  }

  ngOnInit() {
  }

}
