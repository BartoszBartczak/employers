import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import { SearchingComponent } from './searching/searching.component';



@NgModule({
  declarations: [
    EmployeesComponent,
    SearchingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
