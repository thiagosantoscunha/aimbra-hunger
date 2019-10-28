import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistratorComponent } from './pages/registrator/registrator.component';
import { ClientListComponent } from './pages/clients/client-list/client-list.component';
import { ClientFormModule } from './pages/clients/client-form/client-form.module';
import { ClientFormComponent } from './pages/clients/client-form/client-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/registrator',
    pathMatch: 'full'
  },
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  {
    path: 'registrator',
    component: RegistratorComponent
  },
  // {
  //   path: 'clients',
  //   component: ClientListComponent
  // },
  // {
  //   path: 'clients/new',
  //   component: ClientFormComponent
  // },
  // {
  //   path: 'clients/edit/:id',
  //   component: ClientFormComponent
  // },
  // {
  //   path: 'clients',
  //   loadChildren: () => import(`./pages/clients/client-list/client-list.module`).then(m => m.ClientListModule)
  // },
  // {
  //   path: 'refeicoes',
  //   loadChildren: () => import(`./pages/refeicoes/refeicao-list/refeicao-list.module`).then(m => m.RefeicaoListModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
