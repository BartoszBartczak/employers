import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Employee } from './shared/employee.model';
import { EmployeesService } from './shared/employees.service';

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

  
  private getEmployeesList(): void {
    this.employeesService.getEmployees().subscribe(employeesList => {
      this.employeesList = employeesList;
    });
  }

  
  createEmployeeForm(): FormGroup {
    return this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      position: ['', Validators.required],
      salary: ['', Validators.required]
    });
  }

  addEmployee(): void {
    this.employeesService.postEmployee(this.employeeForm.value).subscribe(() => {
      this.getEmployeesList();
      this.employeeForm.reset();
      
    });

    
  }

  
}

