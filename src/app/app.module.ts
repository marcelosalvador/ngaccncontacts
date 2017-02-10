import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeesComponent } from './employees.component';
import { EmployeeService } from './employee.service';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'employees',
        component: EmployeesComponent
      }
    ])
  ],
  declarations: [
    AppComponent ,
    EmployeeDetailComponent,
    EmployeesComponent
    ],
    providers: [
     EmployeeService
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
