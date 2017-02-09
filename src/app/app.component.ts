import { Component } from '@angular/core';

export class Employee {
  id: number;
  name: string;
  title: string;

}
@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{employee.title}}</h1>
    <h2>{{employee.name}}</h2>
  `,
})
export class AppComponent {
  title = 'Software Engineering Manager';
  name = 'Marcelo Salvador';
  employee: Employee = {
    id: 1,
    name: 'Marcelo Salvador',
    title: 'Software Engineering Manager'
  }
}
