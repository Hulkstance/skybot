import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { ConfigService } from '@vex/services/config.service';

@Component({
  selector: 'vex-secondary-toolbar',
  templateUrl: './secondary-toolbar.component.html',
  styleUrls: ['./secondary-toolbar.component.scss']
})
export class SecondaryToolbarComponent implements OnInit {

  @Input() current: string;
  @Input() crumbs: string[];

  fixed$ = this.configService.config$.pipe(
    map(config => config.toolbar.fixed)
  );

  constructor(private configService: ConfigService) {
  }

  ngOnInit() {
  }
}
