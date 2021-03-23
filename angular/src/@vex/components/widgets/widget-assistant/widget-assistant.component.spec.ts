import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WidgetAssistantComponent } from '@vex/components/widgets/widget-assistant/widget-assistant.component';

describe('WidgetAssistantComponent', () => {
  let component: WidgetAssistantComponent;
  let fixture: ComponentFixture<WidgetAssistantComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetAssistantComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
