import { Component, OnInit } from '@angular/core';
import  {EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee.model';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
employees: Employee[];
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employees = this.employeeService.onGet();
  }

  onDelete(id: Number) {
    this.employeeService.onDelete(id);
  }
}