import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorTwoComponent } from './color-two.component';

describe('ColorTwoComponent', () => {


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorTwoComponent ]
    })
    .compileComponents();
  }));



  test('should create', () => {
    const fixture = TestBed.createComponent(ColorTwoComponent);
    const  component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
