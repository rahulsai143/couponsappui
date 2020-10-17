import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvalidRequestComponentComponent } from './invalid-request-component/invalid-request-component.component';

const routes: Routes = [
  {
    path :'invalidRequest',
    component: InvalidRequestComponentComponent
  },
  {
    path:'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
