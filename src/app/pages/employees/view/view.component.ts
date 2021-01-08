import { Employee } from 'src/app/models/employee.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-viewt',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id: number;
  employee: Employee = {
    id: null,
    name: '',
    phone: '',
    email: ''
  };
  constructor(private router: Router, private route: ActivatedRoute ,private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');


    if(this.id !=0){
      this.employee = this.employeeService.onGetEmpoyee(this.id);
    }
  }

  onSubmit(form: NgForm){
    this.router.navigateByUrl('');
  }

}
