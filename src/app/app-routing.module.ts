import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './services/auth.guard';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path: '', component: RegisterComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'register', component: RegisterComponent }, 
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'user-details', component: UserDetailsComponent, canActivate: [AuthGuard] }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
