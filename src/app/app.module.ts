import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { AppRoutingModule } from './app-routing.module';
import { EditComponent } from './pages/employees/edit/edit.component';
import { ViewComponent } from './pages/employees/view/view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PagenotfoundComponent } from 'src/app/pages/employees/pagenotfound/pagenotfound.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeesComponent,
    EditComponent,
    ViewComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
