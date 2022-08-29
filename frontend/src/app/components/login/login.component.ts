import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BasicAuthenticationService } from 'src/app/services/basic-authentication.service';
import { HardcodedAuthenticationService } from 'src/app/services/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(
    private route: Router,
    private ActivatedRoute: ActivatedRoute,
    private myAuthService: HardcodedAuthenticationService,
    private basicAuthService: BasicAuthenticationService
  ) {}

  ngOnInit(): void {}

  handleLogin() {
    if (this.myAuthService.authenticate(this.username, this.password)) {
      this.route.navigate(['/welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

  handleBasicAuthLogin() {
    this.basicAuthService
      .executeBasicAuthentication(this.username, this.password)
      .subscribe(
        (data) => {
          this.route.navigate(['/welcome', this.username]);
          this.invalidLogin = false;
        },
        (error) => {
          this.invalidLogin = true;
        }
      );
  }
}
