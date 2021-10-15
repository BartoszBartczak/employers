import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  
  
  constructor() {
    this.getEmployeeNames(this.employees);
    
}


isListClosed: boolean = false;


    employees = [
        {
            id: 1,
            firstName: 'Jan',
            lastName: 'Kowalski',
            position: 'IT',
            salary: 3000
            
        },
        {
           id: 2,
           firstName: 'Anna',
           lastName: 'Bąk',
           position: 'Administracja',
           salary: 2400
          
        },
        {
           id: 3,
           firstName: 'Paweł',
           lastName: 'Zabłocki',
           position: 'IT',
           salary: 3300
           
        },
        {
           id: 4,
           firstName: 'Tomasz',
           lastName: 'Osiecki',
           position: 'Administracja',
           salary: 2100
        },
        {
           id: 5,
           firstName: 'Iwona',
           lastName: 'Lehis-Gutowska',
           position: 'Handlowiec',
           salary: 3100
        }
    ];

    getEmployeeNames(employees: Employee[]) {
     

      return employees.map((employee: Employee) => {
          const preparedName: string = `${employee.firstName} ${employee.lastName}`;

          return preparedName;
      });
  }

  

  
}

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  salary: number;
}


