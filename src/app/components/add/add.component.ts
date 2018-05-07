import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  private regex: RegExp = new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g);

  private specialKeys: Array<string> = [ 'Backspace', 'Tab', 'End', 'Home' ];
  employee: Employee;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = new Employee();
  }

  add(e: NgForm) {
    this.employeeService.addEmployee(this.employee);
    e.resetForm();
  }

  invalid() {
  if (!String(this.employee.EmpId).match(this.regex) || String(this.employee.EmpId).length > 10) {
    return true;
  } else {
    return false;
  }
}
}
