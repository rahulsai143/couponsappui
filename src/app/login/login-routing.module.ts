import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';


const routes: Routes = [
//   { path: '', redirectTo : "signup", pathMatch:"full" ,
//   canActivate:[AuthGuard]
//  },
 { path: 'login', component: LoginpageComponent },
// { path: 'signup',component: SignupComponent },
// { path: 'forgetPassword',component: ForgetPasswordComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
