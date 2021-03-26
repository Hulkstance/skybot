import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  isDesktop$ = this.breakpointObserver.observe(`(min-width: 1280px)`).pipe(
    map(state => state.matches)
  );
  ltLg$ = this.breakpointObserver.observe(`(max-width: 1279px)`).pipe(
    map(state => state.matches)
  );
  gtMd$ = this.breakpointObserver.observe(`(min-width: 960px)`).pipe(
    map(state => state.matches)
  );
  ltMd$ = this.breakpointObserver.observe(`(max-width: 959px)`).pipe(
    map(state => state.matches)
  );
  gtSm$ = this.breakpointObserver.observe(`(min-width: 600px)`).pipe(
    map(state => state.matches)
  );
  isMobile$ = this.breakpointObserver.observe(`(max-width: 599px)`).pipe(
    map(state => state.matches)
  );
  private quickPanelOpenSubject = new BehaviorSubject<boolean>(false);
  quickPanelOpen$ = this.quickPanelOpenSubject.asObservable();
  private sidenavOpenSubject = new BehaviorSubject<boolean>(false);
  sidenavOpen$ = this.sidenavOpenSubject.asObservable();
  private sidenavCollapsedSubject = new BehaviorSubject<boolean>(false);
  sidenavCollapsed$ = this.sidenavCollapsedSubject.asObservable();
  private sidenavCollapsedOpenSubject = new BehaviorSubject<boolean>(false);
  sidenavCollapsedOpen$ = this.sidenavCollapsedOpenSubject.asObservable();
  private configPanelOpenSubject = new BehaviorSubject<boolean>(false);
  configPanelOpen$ = this.configPanelOpenSubject.asObservable();
  private searchOpen = new BehaviorSubject<boolean>(false);
  searchOpen$ = this.searchOpen.asObservable();

  constructor(private router: Router,
              private breakpointObserver: BreakpointObserver) {
  }

  isLtLg = () => this.breakpointObserver.isMatched(`(max-width: 1279px)`);

  isMobile = () => this.breakpointObserver.isMatched(`(max-width: 599px)`);

  openQuickPanel() {
    this.quickPanelOpenSubject.next(true);
  }

  closeQuickPanel() {
    this.quickPanelOpenSubject.next(false);
  }

  openSidenav() {
    this.sidenavOpenSubject.next(true);
  }

  closeSidenav() {
    this.sidenavOpenSubject.next(false);
  }

  collapseSidenav() {
    this.sidenavCollapsedSubject.next(true);
  }

  expandSidenav() {
    this.sidenavCollapsedSubject.next(false);
  }

  collapseOpenSidenav() {
    this.sidenavCollapsedOpenSubject.next(true);
  }

  collapseCloseSidenav() {
    this.sidenavCollapsedOpenSubject.next(false);
  }

  openConfigPanel() {
    this.configPanelOpenSubject.next(true);
  }

  closeConfigPanel() {
    this.configPanelOpenSubject.next(false);
  }

  openSearch() {
    this.searchOpen.next(true);
  }

  closeSearch() {
    this.searchOpen.next(false);
  }

  enableRTL() {
    this.router.navigate([], {
      queryParams: {
        rtl: 'true'
      }
    });
  }

  disableRTL() {
    this.router.navigate([], {
      queryParams: {
        rtl: 'false'
      }
    });
  }

}
