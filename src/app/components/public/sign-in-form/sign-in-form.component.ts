import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  form : FormGroup = this.fb.group({
    user: ['', [Validators.required]],
    pass: ['', Validators.required]
  });

  onSubmit() : void {
    console.log(this.form.value)
  }

  ngOnInit(): void {
  }

}
