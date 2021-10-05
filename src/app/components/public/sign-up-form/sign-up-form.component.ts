import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

import { User } from 'src/app/interfaces/user.interface';
import { TokenResponse } from 'src/app/interfaces/token-response';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private auth: AuthService,
    private router: Router
  ) {}

  form: FormGroup = this.fb.group({
    user: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    pass: ['', Validators.required],
    confirmPass: ['', Validators.required],
  });

  onSubmit(): void {
    // Compruebo que la contraseña coincida
    if (!this.form.valid) return;

    if (this.passwordMatches()) {
      this.toastr.info('Registrando usuario...');
      this.auth.signUp(this.getUserFromForm()).subscribe(
        (data: TokenResponse) => {
          localStorage.setItem('token', data.token)
          this.toastr.success('Registro exitoso');
          this.router.navigateByUrl('home');
        },
        (error) => console.error(error)
      );
    } else {
      this.toastr.error('La confirmación de contraseña no coincide');
    }
  }

  passwordMatches() {
    return this.form.value.pass === this.form.value.confirmPass;
  }

  getUserFromForm(): User {
    const values = this.form.value;
    return {
      name: values.user,
      email: values.email,
      password: values.pass,
    };
  }

  ngOnInit(): void {}
}
