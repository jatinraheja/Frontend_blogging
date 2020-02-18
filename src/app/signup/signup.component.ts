import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Respdata, Userdata} from '../userdata';
import {HttpClient} from '@angular/common/http';
import {SignupService} from '../signup.service';
import {AppService} from '../app.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private route: Router, private http: HttpClient, private service: SignupService, private app: AppService) { }
  username;
  password;
  email;
  userdata: Userdata;
  respdata: Respdata;
  confirmpassword;
  signupform: FormGroup;
  ngOnInit() {
    if (this.app.checklogin()) {
      this.route.navigate(['home']);
    }
    // this.signupform = new FormGroup({
    //   username : new FormControl(),
    //   email : new FormControl(),
    //   password: new FormControl(),
    //   confirmpassword : new FormControl(),
    // });
  }
  signup() {
    console.log(this.signupform.value);
  }
  register() {
    this.userdata = new Userdata();
    this.userdata.username = this.username;
    this.userdata.email = this.email;
    this.userdata.password = this.password;
    this.service.adddata(this.userdata).subscribe((data: Respdata) => {
      this.respdata = data;
      alert('User Registered Successfully');
    });
    this.route.navigate(['/login']);
  }

}
