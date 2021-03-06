import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { NavigationDropdown, NavigationItem, NavigationLink, NavigationSubheading } from '@vex/interfaces/navigation-item.interface';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  items: NavigationItem[] = [];

  private openChangeSubject = new Subject<NavigationDropdown>();
  openChange$ = this.openChangeSubject.asObservable();

  constructor() {
  }

  triggerOpenChange(item: NavigationDropdown) {
    this.openChangeSubject.next(item);
  }

  isLink(item: NavigationItem): item is NavigationLink {
    return item.type === 'link';
  }

  isDropdown(item: NavigationItem): item is NavigationDropdown {
    return item.type === 'dropdown';
  }

  isSubheading(item: NavigationItem): item is NavigationSubheading {
    return item.type === 'subheading';
  }

}
