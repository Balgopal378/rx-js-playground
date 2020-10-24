import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseCustomObservablesComponent } from './use-custom-observables.component';

describe('UseCustomObservablesComponent', () => {
  let component: UseCustomObservablesComponent;
  let fixture: ComponentFixture<UseCustomObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseCustomObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseCustomObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
