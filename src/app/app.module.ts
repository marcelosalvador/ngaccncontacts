import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeesComponent } from './employees.component';
import { EmployeeService } from './employee.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent ,
    EmployeeDetailComponent,
    EmployeesComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
