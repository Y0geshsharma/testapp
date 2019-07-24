import {  TestBed } from '@angular/core/testing';

import { ColorThreeComponent } from './color-three.component';

describe('ColorThreeComponent', () => {

  beforeEach(() => {
   return TestBed.configureTestingModule({
      declarations: [ ColorThreeComponent ]
    })
    .compileComponents();
  });


  test('should create', () => {
    const fixture = TestBed.createComponent(ColorThreeComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
