import {  TestBed } from '@angular/core/testing';
import { TestComponent } from './test.component';
import { AppModule } from '../app.module';

describe('TestComponent', () => {

  beforeEach(() => {
   return TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();
  });

  test('should create', () => {
    const fixture = TestBed.createComponent(TestComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
