import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WidgetLargeChartComponent } from '@vex/components/widgets/widget-large-chart/widget-large-chart.component';

describe('WidgetLargeChartComponent', () => {
  let component: WidgetLargeChartComponent;
  let fixture: ComponentFixture<WidgetLargeChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetLargeChartComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetLargeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
