import {  TestBed } from '@angular/core/testing';

import { ColorOneComponent } from './color-one.component';

describe('ColorOneComponent', () => {

  beforeEach(() => {
    return TestBed.configureTestingModule({
      declarations: [ ColorOneComponent ]
    })
    .compileComponents();
  });


  test('should create', () => {
    const fixture = TestBed.createComponent(ColorOneComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();

  });
});
