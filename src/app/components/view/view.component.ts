import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  employeeCollection: Employee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.display();
    this.employeeService.added.subscribe(
      (data) => { this.display(); }
    );
  }

  display() {
    this.employeeCollection = new Array<Employee>();
    this.employeeService.getEmployee().subscribe(
      (data: Employee[]) => {
        this.employeeCollection = Object.assign(data);
      }
    );
  }

}
