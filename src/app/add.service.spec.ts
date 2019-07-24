import { TestBed } from '@angular/core/testing';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppService } from './app.service';




describe('mockservices', () => {
  let httpTest: HttpTestingController;
  let service: AppService;

  beforeEach(() => {
return TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule],
      providers: [AppService]
    });
  });
  beforeEach(() => {
    httpTest = TestBed.get(HttpTestingController);
    service = TestBed.get(AppService);

  });

  test('returned Observable should match the right data', () => {
    const mockEmployee =  {
      employee_name: 'yogesh',
      employee_age: 12,
      employee_salary: 1111,
      department: [
        {
          dept: 'Service',
          selected: true
        }
      ],
      statusNow: 'confirm'
    };

    service.createUser(mockEmployee).subscribe();
    const mockUrl = 'http://localhost:8081/employees';
    const req = httpTest.expectOne(mockUrl);
    expect(req.request.urlWithParams).toBe(mockUrl);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(mockEmployee);

    req.flush(mockEmployee);
    httpTest.verify();
  });
  test('test Delete', () => {
    service.deleteEmployee(5).subscribe();
    const call = httpTest.expectOne('http://localhost:8081/employees/5');
    expect(call.request.method).toEqual('DELETE');
    call.flush({});
    httpTest.verify();
  });


  test('test Delete not called', () => {
    service.deleteEmployee(3)// subscribe();
    httpTest.expectNone('http://localhost:8081/mockemployee/3');
  });



  test('test get called', () => {
    service.getEmployees().subscribe();
    httpTest.match((request) => {
      return request.url.match(/mockemployee/) &&
               request.method === 'GET';
      });
  });

});
