import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SignInFormComponent } from '../sign-in-form/sign-in-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HostDirective } from '../../../directives/host.directive';
import { SignUpFormComponent } from '../sign-up-form/sign-up-form.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignInFormComponent,
    HostDirective,
    SignUpFormComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginModule { }
