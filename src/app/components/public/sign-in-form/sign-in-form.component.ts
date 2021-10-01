import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { TokenResponse } from 'src/app/interfaces/token-response';

import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent {
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private toastr: ToastrService,
    private route: Router,
  ) {}

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    const response = this.auth.signIn(this.getUserFromForm()).subscribe(
      (data: TokenResponse) => {
        localStorage.setItem('token', data.token);
        this.toastr.success('Logueado correctamente.');
        this.route.navigateByUrl('home')
      },
      (errorResponse: HttpErrorResponse) => {
        this.toastr.error('El usuario o la contraseña no coinciden.');
      }
    );
  }

  getUserFromForm(): User {
    return {
      ...this.form.value,
    };
  }
}
