import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import { SearchingComponent } from './searching/searching.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    EmployeesComponent,
    SearchingComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
