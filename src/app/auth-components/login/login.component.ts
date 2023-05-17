import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginFormComponent {
loginForm!: FormGroup;

constructor(private formBuilder: FormBuilder ) {};

ngOnInit() {
  this.loginForm = this.formBuilder.group({
    email: new FormControl('', Validators.maxLength(100)),
    password: new FormControl('', Validators.maxLength(100))
  });
}


onSubmit(): void {
  if(this.loginForm.invalid) {
    return;
  }

  console.log(this.loginForm.value);
}
}