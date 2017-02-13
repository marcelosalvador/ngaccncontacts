import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { EmployeeDetailComponent }  from './employee-detail.component';
import { EmployeesComponent }      from './employees.component';
import { EmployeeService }          from './employee.service';
import { AppRoutingModule }     from './app-routing.module';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeeDetailComponent,
    EmployeesComponent
  ],
  providers: [ EmployeeService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
