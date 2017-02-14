import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'my-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {
  employees : Employee[];
  selectedEmployee: Employee;

  constructor(
    private router: Router,
    private employeeService: EmployeeService) {}

  getEmployees() : void {
    this.employeeService.getEmployees().then(employees => this.employees = employees);
  }
  ngOnInit(): void {
    this.getEmployees();
  }

  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }

  gotoDetail(): void {
   this.router.navigate(['/detail', this.selectedEmployee.id]);
 }
}
