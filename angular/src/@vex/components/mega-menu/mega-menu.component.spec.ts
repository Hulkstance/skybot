import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MegaMenuComponent } from '@vex';

describe('MegaMenuComponent', () => {
  let component: MegaMenuComponent;
  let fixture: ComponentFixture<MegaMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MegaMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
