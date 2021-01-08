import { Employee } from 'src/app/models/employee.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  submitbtn: string;
  label: string;
  btnaddupdate: string;
  employee: Employee = {
    id: null,
    name: '',
    phone: null,
    email: ''
  };
  constructor(private router: Router, private route: ActivatedRoute ,private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.submitbtn = this.id === 0? 'Add' : 'Update';
    this.label = this.id === 0? 'text' : 'hidden';
    this.btnaddupdate = this.id === 0? 'btn btn-success' : 'btn btn-warning';


    if(this.id !=0){
      this.employee = this.employeeService.onGetEmpoyee(this.id);
    }
  }

  onSubmit(form: NgForm){
    let employee: Employee = {
      id: form.value.id,
      name: form.value.name,
      email: form.value.email,
      phone: form.value.phone,
    }
    if(this.id == 0){
    this.employeeService.onAdd(employee);
    }
    else{
      this.employeeService.onUpdate(employee);
    }
    this.router.navigateByUrl('');
  }

}
