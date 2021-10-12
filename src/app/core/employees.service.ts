import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {


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
}

