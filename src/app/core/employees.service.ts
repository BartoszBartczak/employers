import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  postEmployee(value: any) {
    throw new Error('Method not implemented.');
  }
  constructor() {
    this.getEmployeeNames(newFunction());
    this.checkList();

    function newFunction(this: any): Employee[] {
      return this.newMethod().employees;
    }
}
  private newMethod() {
    return this;
  }

  checkList() {
    throw new Error('Method not implemented.');
  }


    employees = [
        {
            firstName: 'Jan',
            lastName: 'Kowalski',
            position: 'IT',
            salary: 3000
            
        },
        {
           firstName: 'Anna',
           lastName: 'Bąk',
           position: 'Administracja',
           salary: 2400
          
        },
        {
           firstName: 'Paweł',
           lastName: 'Zabłocki',
           position: 'IT',
           salary: 3300
           
        },
        {
           firstName: 'Tomasz',
           lastName: 'Osiecki',
           position: 'Administracja',
           salary: 2100
        },
        {
           firstName: 'Iwona',
           lastName: 'Lehis-Gutowska',
           position: 'Handlowiec',
           salary: 3100
        }
    ];
    getEmployeeNames(employees: Employee[]) {
      const prefix: string = 'B';

      return employees.map((employee: Employee) => {
          const preparedName: string = `${prefix} ${employee.firstName} ${employee.lastName}`;

          return preparedName;
      });
  }

  
}

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  salary: number;
}


