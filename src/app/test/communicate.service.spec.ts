import { TestBed } from '@angular/core/testing';

import { CommunicateService } from './communicate.service';

describe('CommunicateService', () => {
  beforeEach(() => TestBed.configureTestingModule({})

  );

  test('should be created', () => {
    const service: CommunicateService = TestBed.get(CommunicateService);
    expect(service).toBeTruthy();
  });
});
