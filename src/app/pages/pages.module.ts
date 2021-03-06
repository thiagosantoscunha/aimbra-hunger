import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
// import { ClientRoutingModule } from './clients/clients-routing.module';
import { ClientFormModule } from './clients/client-form/client-form.module';
import { ClientListModule } from './clients/client-list/client-list.module';
import { RegistratorModule } from './registrator/registrator.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    LoginModule,
    RegistratorModule,
    ClientListModule,
    ClientFormModule
  ]
})
export class PagesModule { }
