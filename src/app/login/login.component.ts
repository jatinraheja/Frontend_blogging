import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../app.service';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
username = '';
password = '';
  constructor(private route: Router , private service: AppService, private loginservice: AuthenticationService) { }

  ngOnInit() {
    if (this.service.checklogin()) {
        this.route.navigate(['/home']);
    }
  }
gotosignup() {
  this.route.navigate(['/signup']);
}
logoin() {
  this.loginservice.authenticate(this.username, this.password).subscribe(
    data => {
      this.service.isLoggedIn(true);
      this.route.navigate(['home']);
    });
}
}
