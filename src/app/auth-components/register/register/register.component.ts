import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registrationSuccess = false;
  message: string;

  constructor(public authService: AuthService) {}

  handleRegistration(email: string, password: string) {
    this.authService.SignUp(email, password).then(
      () => {
        this.registrationSuccess = true;
        this.message = 'Account successfully created';

        setTimeout(() => {
          this.authService.redirectToLogin();
        }, 3000);
      },
      (error) => {
        // Handle registration error if neededd
      }
    );
  }
}
