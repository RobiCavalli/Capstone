import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LaboratoriComponent } from './laboratori/laboratori.component';
import { CodingRoboticaComponent } from './coding-robotica/coding-robotica.component';
import { ApprofondimentiComponent } from './approfondimenti/approfondimenti.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/signup',
    pathMatch: 'full',
  },

  {
    path: 'signup',
    component: AuthComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'laboratori',
    component: LaboratoriComponent,
  },

  {
    path: 'coding-roboticaEducativa',
    component: CodingRoboticaComponent,
  },

  {
    path: 'approfondimenti',
    component: ApprofondimentiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
