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
    <h2> Employees </h2>
    <ul class="employees">
      <li *ngFor="let employee of employees "> <!-- Take each employee in the employees array --.
        <!-- each employee goes here -->
        <span class="badge">{{employee.id}}</span> {{employee.name}}
      </li>
    <ul>
  `,
})
export class AppComponent {
  title = 'Software Engineering Manager';
  name = 'Marcelo Salvador';
  employees = EMPLOYEES;
}
