import { TestBed, ComponentFixture } from '@angular/core/testing';

import { AddEmpComponent } from './add-emp.component';
import { AppModule } from '../app.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';





describe('AddEmpComponent', () => {
  let comp: AddEmpComponent;
  let fixture: ComponentFixture<AddEmpComponent>;
  

  beforeEach(() => {
return TestBed.configureTestingModule({
      imports: [AppModule , ReactiveFormsModule, FormsModule]
    })
   .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmpComponent);
    comp = fixture.componentInstance;
    comp.ngOnInit();
    expect(comp).toBeTruthy();

  });

  test('form invalid when empty', () => {
    expect(comp.newEmployee.valid).toBeFalsy();

  });
  test('validation a field in form', ( ) => {
      const emplName = comp.newEmployee.get('employee_name');
      expect(emplName.valid).toBeFalsy();
      let errors =  {};
      emplName.patchValue('a');
      errors = emplName.errors || {};
      console.log(emplName.hasError('minlength'));
      expect(emplName.hasError('required')).toBeFalsy() ;
      expect(emplName.hasError('minlength')).toBeTruthy();

  });

});
