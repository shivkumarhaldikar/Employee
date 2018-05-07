import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class EmployeeService {
  url: string;
  @Output() added: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient: HttpClient) {
    this.url = 'http://richmsbztkd42/NameDatabase/api/Employee';
  }

  getEmployee(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.url , { responseType: 'json' } );
  }

  addEmployee(employee: Employee) {
    this.httpClient.post(this.url, employee, { responseType: 'json' }).subscribe(
      (data) => {
        console.log(data);
        this.added.emit(null);
      }
    );
  }

}
