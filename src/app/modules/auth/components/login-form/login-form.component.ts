import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '@auth/services/auth-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  constructor(private authService: AuthServiceService) {}

  ngOnInit(): void {}
}
