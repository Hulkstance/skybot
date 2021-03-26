import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter, map, startWith } from 'rxjs/operators';

import { checkRouterChildData } from '@vex/utils/check-router-child-data';
import { SidebarComponent } from '@vex/components/sidebar/sidebar.component';
import { LayoutService } from '@vex/services/layout.service';
import { ConfigService } from '@vex/services/config.service';

@UntilDestroy()
@Component({
  selector: 'vex-custom-layout',
  templateUrl: './custom-layout.component.html',
  styleUrls: ['./custom-layout.component.scss']
})
export class CustomLayoutComponent implements OnInit {

  @ViewChild('configPanel', { static: true }) configPanel: SidebarComponent;

  sidenavCollapsed$ = this.layoutService.sidenavCollapsed$;
  isFooterVisible$ = this.configService.config$.pipe(map(config => config.footer.visible));
  isDesktop$ = this.layoutService.isDesktop$;

  toolbarShadowEnabled$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    startWith(null),
    map(() => checkRouterChildData(this.router.routerState.root.snapshot, data => data.toolbarShadowEnabled))
  );

  constructor(
    private layoutService: LayoutService,
    private configService: ConfigService,
    private breakpointObserver: BreakpointObserver,
    private router: Router) {
  }

  ngOnInit() {
    this.layoutService.configPanelOpen$
      .pipe(
        untilDestroyed(this)
      ).subscribe(open => open ? this.configPanel.open() : this.configPanel.close());
  }

}
