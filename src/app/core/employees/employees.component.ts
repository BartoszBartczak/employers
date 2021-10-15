import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee, EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {
  employeesList: Employee[] = [];
  employeeForm!: FormGroup;
 
  

  constructor(private employeesService: EmployeesService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getEmployeesList();
    this.employeeForm = this.createEmployeeForm();
  }
  
  getEmployeesList(): void {
    this.employeesService.getEmployeeNames().subscribe(() => {
      this.getEmployeesList();
      
    });
  }

  

  createEmployeeForm(): FormGroup {
    return this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      dateOfBirth: [''],
      position: [''],
      salary: ['']
    });

  
  
  
}
}
function employees(_employees: any, _arg1: any) {
  throw new Error('Function not implemented.');
}

