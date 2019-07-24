import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Employee {
  id?: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
}

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:8081/employees';

  getEmployees(para?:any) {
    return this.http.get<Employee[]>(this.baseUrl, para);
  }


  createUser(employee: Employee): Observable<any> {
    return this.http.post<any>(this.baseUrl, employee);
  }
  deleteEmployee(id: number) {
    
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
