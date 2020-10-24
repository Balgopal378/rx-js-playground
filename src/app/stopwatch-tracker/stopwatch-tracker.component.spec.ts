import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopwatchTrackerComponent } from './stopwatch-tracker.component';

describe('StopwatchTrackerComponent', () => {
  let component: StopwatchTrackerComponent;
  let fixture: ComponentFixture<StopwatchTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopwatchTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopwatchTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
