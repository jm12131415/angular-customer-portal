import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers: [AuthService],
})
export class LoginFormComponent implements OnInit {
  email: string;
  password: string;

  constructor(private authService: AuthService) {
    this.email = '';
    this.password = '';
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.authService.login(this.email, this.password);
  }
}
