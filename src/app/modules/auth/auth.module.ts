import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from 'src/app/auth-components/login/login.component';
import { RegisterComponent } from 'src/app/auth-components/register/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from 'src/app/auth-components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from 'src/app/auth-components/verify-email/verify-email.component';

const authRoutes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
];

@NgModule({
  declarations: [LoginFormComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
  exports: [RouterModule],
})
export class AuthModule {}
