import { TestBed } from '@angular/core/testing';

import { MyObservablesService } from './my-observables.service';

describe('MyObservablesService', () => {
  let service: MyObservablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyObservablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
