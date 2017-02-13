import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeesComponent } from './employees.component';
import { DashboardComponent } from './dashboard.component';
import { EmployeeService } from './employee.service';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'employees',
        component: EmployeesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detail/:id',
        component: EmployeeDetailComponent
      }
    ])
  ],
  declarations: [
    AppComponent ,
    DashboardComponent,
    EmployeeDetailComponent,
    EmployeesComponent
    ],
    providers: [
     EmployeeService
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
