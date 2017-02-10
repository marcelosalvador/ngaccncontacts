import { Component, Input } from '@angular/core';
import { Employee } from './employee';
@Component({
  selector: 'my-employee-detail',
  template: `
    <div *ngIf="employee">
      <h2>{{employee.name}} details!</h2>
      <div><label>id: </label>{{employee.id}}</div>
      <div>
        <label>name: </label>{{employee.name}}
      </div>
    </div>
  `
})
export class EmployeeDetailComponent {
  @Input()
  employee: Employee;
}
