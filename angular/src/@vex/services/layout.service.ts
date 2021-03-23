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
  private _quickPanelOpenSubject = new BehaviorSubject<boolean>(false);
  quickPanelOpen$ = this._quickPanelOpenSubject.asObservable();
  private _sidenavOpenSubject = new BehaviorSubject<boolean>(false);
  sidenavOpen$ = this._sidenavOpenSubject.asObservable();
  private _sidenavCollapsedSubject = new BehaviorSubject<boolean>(false);
  sidenavCollapsed$ = this._sidenavCollapsedSubject.asObservable();
  private _sidenavCollapsedOpenSubject = new BehaviorSubject<boolean>(false);
  sidenavCollapsedOpen$ = this._sidenavCollapsedOpenSubject.asObservable();
  private _configPanelOpenSubject = new BehaviorSubject<boolean>(false);
  configPanelOpen$ = this._configPanelOpenSubject.asObservable();
  private _searchOpen = new BehaviorSubject<boolean>(false);
  searchOpen$ = this._searchOpen.asObservable();

  constructor(private router: Router,
              private breakpointObserver: BreakpointObserver) {
  }

  isLtLg = () => this.breakpointObserver.isMatched(`(max-width: 1279px)`);

  isMobile = () => this.breakpointObserver.isMatched(`(max-width: 599px)`);

  openQuickPanel() {
    this._quickPanelOpenSubject.next(true);
  }

  closeQuickPanel() {
    this._quickPanelOpenSubject.next(false);
  }

  openSidenav() {
    this._sidenavOpenSubject.next(true);
  }

  closeSidenav() {
    this._sidenavOpenSubject.next(false);
  }

  collapseSidenav() {
    this._sidenavCollapsedSubject.next(true);
  }

  expandSidenav() {
    this._sidenavCollapsedSubject.next(false);
  }

  collapseOpenSidenav() {
    this._sidenavCollapsedOpenSubject.next(true);
  }

  collapseCloseSidenav() {
    this._sidenavCollapsedOpenSubject.next(false);
  }

  openConfigPanel() {
    this._configPanelOpenSubject.next(true);
  }

  closeConfigPanel() {
    this._configPanelOpenSubject.next(false);
  }

  openSearch() {
    this._searchOpen.next(true);
  }

  closeSearch() {
    this._searchOpen.next(false);
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
