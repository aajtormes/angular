import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule } from '@angular/router';
import {EmployeesComponent} from './pages/employees/employees.component';
import { EditComponent } from './pages/employees/edit/edit.component';
import { ViewComponent } from 'src/app/pages/employees/view/view.component';
import { PagenotfoundComponent } from './pages/employees/pagenotfound/pagenotfound.component';

const routes: Routes = [
{
  path: "",
  component: EditComponent
},
{
  path: "employee/add/:id",
  component: EditComponent
},
{
  path: "employee/edit/:id",
  component: EditComponent
},
{
  path: "employee/view/:id",
  component: ViewComponent
},

{ 
  path: "**",
  component: PagenotfoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
