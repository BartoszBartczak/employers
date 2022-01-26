import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  
  private dbUrl = '/assets/employees.json';

  constructor(private http: HttpClient) { }

  
    getEmployees(): Observable<Employee[]> {
      return this.http.get<Employee[]>(this.dbUrl);
  }

 
    getEmployee(id: string): Observable<Employee[]> {
      return this.http.get<Employee[]>(`${this.dbUrl}/${id}`);
}

  
    postEmployee(employee: Employee): Observable<Employee> {
      return this.http.post<Employee>(this.dbUrl, employee);
  }

  
    putEmployee(employee: Employee): Observable<Employee> {
      return this.http.put<Employee>(`${this.dbUrl}/${employee.id}`, employee);
  }

  
    patchEmployee(employee: Partial<Employee>): Observable<Employee> {
      return this.http.patch<Employee>(`${this.dbUrl}/${employee.id}`, employee);
  }

}
