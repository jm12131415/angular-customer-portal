import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.authService.isAuthenticated.subscribe((isLoggedIn) => {
      if (!isLoggedIn) {
        this.router;
      }
    });
  }
}
