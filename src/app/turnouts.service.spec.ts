import { TestBed } from '@angular/core/testing';

import { TurnoutsService } from './turnouts.service';

describe('TurnoutsService', () => {
  let service: TurnoutsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TurnoutsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
