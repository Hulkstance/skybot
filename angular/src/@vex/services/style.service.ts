import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';

export enum Style {
  light = 'vex-style-light',
  default = 'vex-style-default',
  dark = 'vex-style-dark'
}

@UntilDestroy()
@Injectable({
  providedIn: 'root'
})
export class StyleService {

  defaultStyle = Style.default;

  private styleSubject = new BehaviorSubject<Style>(this.defaultStyle);
  style$ = this.styleSubject.asObservable();

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.style$.pipe(untilDestroyed(this)).subscribe(style => this.updateStyle(style));
  }

  setStyle(style: Style) {
    this.styleSubject.next(style);
  }

  private updateStyle(style: Style) {
    const body = this.document.body;

    Object.values(Style).filter(s => s !== style).forEach(value => {
      if (body.classList.contains(value)) {
        body.classList.remove(value);
      }
    });

    body.classList.add(style);
  }

}
