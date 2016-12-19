import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/authService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.username, this.password);
    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/c';
        // Redirect the user
        console.log(redirect);
        this.router.navigate([redirect]);
      }
    });
  }
}
