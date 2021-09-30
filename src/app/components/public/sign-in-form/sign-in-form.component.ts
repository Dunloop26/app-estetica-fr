import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IUser } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent implements OnInit {
  constructor(private fb: FormBuilder, private auth: AuthService) {}

  user: IUser = {
    email: '',
    password: '',
  };

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    this.auth.signIn(this.user).subscribe(
      (data) => {
        console.log('Hello world');
      },
      (error: HttpErrorResponse) => {
        console.error('ERROR OCURRED:', error);
      }
    );
  }

  ngOnInit(): void {}
}
