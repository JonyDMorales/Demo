import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OperacionesComponent} from './pages/operaciones/operaciones.component';
import {LoginComponent} from './pages/login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'operaciones', component: OperacionesComponent },
  { path: '**' , pathMatch: 'full' , redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
