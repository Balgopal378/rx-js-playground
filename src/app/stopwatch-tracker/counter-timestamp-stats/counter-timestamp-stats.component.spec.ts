import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterTimestampStatsComponent } from './counter-timestamp-stats.component';

describe('CounterTimestampStatsComponent', () => {
  let component: CounterTimestampStatsComponent;
  let fixture: ComponentFixture<CounterTimestampStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterTimestampStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterTimestampStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
