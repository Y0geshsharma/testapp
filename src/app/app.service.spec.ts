import { TestBed } from '@angular/core/testing';
import {AppModule} from './app.module';

import { AppService } from './app.service';
debugger;

describe('AppService', () => {
  beforeEach(() =>  TestBed.configureTestingModule({
    imports: [ AppModule ],
  }));
  test('should be created', () => {
    const service: AppService = TestBed.get(AppService);
    expect(service).toBeTruthy();
  });
});


