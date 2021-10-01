import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private auth: AuthService
  ) {}

  form: FormGroup = this.fb.group({
    user: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    pass: ['', Validators.required],
    confirmPass: ['', Validators.required],
  });

  onSubmit(): void {
    // Compruebo que la contraseña coincida
    if (this.passwordMatches()) {
      this.toastr.info('Registrando usuario...');
      this.auth.signUp(this.getUserFromForm()).subscribe(
        (data) => {
          console.log(data);
          this.toastr.success('Registro exitoso');
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
