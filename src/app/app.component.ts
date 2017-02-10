import { Component } from '@angular/core';

export class Employee {
  id: number;
  name: string;
  title: string;

}

const EMPLOYEES: Employee[] = [
  {id:1, name:'Marcelo Salvador', title: 'Software Engineering Manager'},
  {id:2, name:'Marcio Salvador',  title: 'Software Engineering Associate Manager'}

];

@Component({
  selector: 'my-app',
  template: `
    <h2> Employees > </h2>
    <ul class="employees">
      <li *ngFor="let employee of employees"  [class.selected]="employee === selectedEmployee" (click)="onSelect(employee)"> <!-- Take each employee in the employees array and passing the employee input variable as an argument -->
        <!-- each employee goes here -->
        <span class="badge">{{employee.id}}</span> {{employee.name}}
      </li>
    <ul>
    <!-- keep details out of the DOM until there is a selected employee -->
    <div *ngIf="selectedEmployee">
      <h2>{{selectedEmployee.name}} address!</h2>
      <div><label>id: </label>{{selectedEmployee.id}}</div>
      <div><label>name: </label>{{selectedEmployee.name}}</div>
    </div>
  `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .employees {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .employees li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .employees li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .employees li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .employees .text {
    position: relative;
    top: -3px;
  }
  .employees .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})
export class AppComponent {
  title = 'Software Engineering Manager';
  employees = EMPLOYEES;
  selectedEmployee: Employee;

  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }
}
