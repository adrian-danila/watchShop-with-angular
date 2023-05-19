import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from 'src/app/auth-components/login/login.component';
import { RegisterComponent } from 'src/app/auth-components/register/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';

const authRoutes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterComponent },
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
