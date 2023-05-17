import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
registerForm!: FormGroup;


constructor(private formBuilder: FormBuilder) {

}

ngOnInit() {
  this.registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('',[Validators.required]),
  });
}


onSubmit() {
  console.log("Submit button clicked")
  if (this.registerForm.valid) {
    const userData = {
      name: this.registerForm.controls['email'].value,
      password: this.registerForm.controls['password'].value,
      confirmPassword: this.registerForm.controls['confirmPassword'].value
    };
    localStorage.setItem('userData', JSON.stringify(userData));
  }

}
}
