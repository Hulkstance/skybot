import { Component, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'vex-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  host: {
    class: 'vex-sidebar'
  }
})
export class SidebarComponent {

  @Input() position: 'left' | 'right' = 'left';
  @Input() invisibleBackdrop: boolean;
  private isOpened: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  get opened() {
    return this.isOpened;
  }

  @Input() set opened(opened: boolean) {
    this.isOpened = opened;
    opened ? this.enableScrollblock() : this.disableScrollblock();
  }

  get positionLeft() {
    return this.position === 'left';
  }

  get positionRight() {
    return this.position === 'right';
  }

  enableScrollblock() {
    if (!this.document.body.classList.contains('vex-scrollblock')) {
      this.document.body.classList.add('vex-scrollblock');
    }
  }

  disableScrollblock() {
    if (this.document.body.classList.contains('vex-scrollblock')) {
      this.document.body.classList.remove('vex-scrollblock');
    }
  }

  open() {
    this.opened = true;
  }

  close() {
    this.opened = false;
  }

}
