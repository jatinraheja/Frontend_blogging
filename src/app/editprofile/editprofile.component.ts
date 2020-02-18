import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {Userdata} from '../userdata';
import {Router} from '@angular/router'
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {
  contact;
  gender;
  userdata;
  username;
  email;
  password;
  id;
  alluser;
  pdata: Userdata;
  rdata;
  constructor( private userservice: UsersService , private route: Router) { }

  ngOnInit() {
    this.userservice.getuser().subscribe(data => {
      this.userdata =  data;
      this.id = this.userdata.id;
      this.email = this.userdata.email;
      this.password = this.userdata.password;
      this.username = this.userdata.username;
      this.contact = this.userdata.contact;
      this.gender = this.userdata.gender;

    });
  }
  updateuser(regform: any) {
    this.pdata = new Userdata();
    this.pdata.username = this.username;
    this.pdata.email = this.email;
    this.pdata.password = this.password;
    this.pdata.contact = this.contact;
    this.pdata.gender = this.gender;
    this.userservice.updateuser(this.id, this.pdata).subscribe( data => {
      this.rdata = data;
    });
    this.route.navigate(['/profile']);

  }

}
