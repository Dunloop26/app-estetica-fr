import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  form : FormGroup = this.fb.group(
    {
      user:['', Validators.required],
      email:['', [ Validators.required, Validators.email ]],
      pass:['', Validators.required],
      confirmPass:['', Validators.required],
    }
  );

  onSubmit() : void {
    console.log(this.form.value);
  }

  ngOnInit(): void {
  }

}
