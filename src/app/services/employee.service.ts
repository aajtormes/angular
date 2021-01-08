import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = [
  {
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442"
  },

  {
    id: 2,
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125"
  },

  {
    id: 3,
    name: "Clementine Bauch",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447"
  },

  {
    id: 4,
    name: "Patricia Lebsack",
    email: "Julianne.OConner@kory.org",
    phone: "493-170-9623 x156"
  },

  {
    id: 5,
    name: "Chelsey Dietrich",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289"
  },

  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    email: "Karley_Dach@jasper.info",
    phone: "1-477-935-8478 x6430"
  },

  {
    id: 7,
    name: "Kurtis Weissnat",
    email: "Telly.Hoeger@billy.biz",
    phone: "210.067.6132"
  },

  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    email: "Sherwood@rosamond.me",
    phone: "586.493.6943 x140"
  },

  {
    id: 9,
    name: "Glenna Reichert",
    email: "Chaim_McDermott@dana.io",
    phone: "(775)976-6794 x41206"
  },

  {
    id: 10,
    name: "Clementina DuBuque",
    email: "Rey.Padberg@karina.biz",
    phone: "024-648-3804"
  }

  ];
  constructor() { }

  onGet(){
    return this.employees;
  }
  onGetEmpoyee(id: Number){
    return this.employees.find(x=>x.id === id);
  }

  onAdd(employee: Employee){
    this.employees.push(employee);
  }

  onDelete(id: Number){
    let employee = this.employees.find(x=>x.id === id);
    let index = this.employees.indexOf(employee,0);
    this.employees.splice(index,1);
  }

  onUpdate(employee: Employee){
    let oldEmployee = this.employees.find(x=>x.id === employee.id);
    oldEmployee.id = employee.id;
    oldEmployee.name = employee.name;
    oldEmployee.email = employee.email;
    oldEmployee.phone = employee.phone;
  }
};
