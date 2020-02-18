import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
  contact;
  gender;
  userdata;
  username;
  email;
  password;

  constructor(private route: Router, private users: UsersService) { }
private user;
  ngOnInit() {

    this.users.getuser().subscribe( data => {
      this.user = data;
      this.username = this.user.username;
      this.email = this.user.email;
      this.password = this.user.password;
      this.contact = this.user.contact;
      this.gender = this.user.gender;
    });
  }
  editprofile() {
    this.route.navigate(['/editprofile']);

  }

}
