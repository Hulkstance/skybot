import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FormControl } from '@angular/forms';
import { filter } from 'rxjs/operators';

import { SearchService } from '@vex/services/search.service';
import { LayoutService } from '@vex/services/layout.service';

@UntilDestroy()
@Component({
  selector: 'vex-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  show$ = this.layoutService.searchOpen$;
  searchCtrl = new FormControl();
  icClose = icClose;

  @ViewChild('searchInput', { static: true }) input: ElementRef;

  constructor(private layoutService: LayoutService,
              private searchService: SearchService) {
  }

  ngOnInit() {
    this.searchService.isOpenSubject.next(true);
    this.searchCtrl.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(value => this.searchService.valueChangesSubject.next(value));

    this.show$.pipe(
      filter(show => show),
      untilDestroyed(this)
    ).subscribe(() => this.input.nativeElement.focus());
  }

  close() {
    this.layoutService.closeSearch();
    this.searchCtrl.setValue(undefined);
    this.searchService.isOpenSubject.next(false);
  }

  search() {
    this.searchService.submitSubject.next(this.searchCtrl.value);
    this.close();
  }

  ngOnDestroy(): void {
    this.layoutService.closeSearch();
    this.searchCtrl.setValue(undefined);
    this.searchService.isOpenSubject.next(false);
  }
}
