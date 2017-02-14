import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Employee } from './employee';


@Injectable()
  export class EmployeeService{

  private employeesUrl = '/api/employees';

  constructor(private http: Http){}

  getEmployees(): Promise<Employee[]> {
    return this.http.get(this.employeesUrl)
               .toPromise()
               .then(response => response.json().data as Employee[])
               .catch(this.handleError);

  }
  getEmployee(id: number): Promise<Employee> {
      return this.getEmployees()
                 .then(employees => employees.find(employee => employee.id === id));
    }
}
