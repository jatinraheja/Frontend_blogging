import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {UsersService} from '../users.service';
import {HttpClient} from '@angular/common/http';
import {dateComparator} from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-tools';
import {FollowingService} from '../following.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
  export class UserprofileComponent implements OnInit {
  constructor( private route: ActivatedRoute, private userservice: UsersService, private http: HttpClient, private followingservice: FollowingService) { }

  usersdata;
  username;
  email;
  userid;
  useradded;
  followed = false;
  followinglist;
  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.username = param.get('username');
      console.log(this.username);
      // console.log("User id is");
      // console.log(this.userid);
      this.userservice.getuserbyusername(this.username).subscribe( data => {
        this.usersdata = data;
        // this.username = this.usersdata.username;
        this.email = this.usersdata.email;
        this.userid = this.usersdata.id;
        console.log(this.usersdata.username);
        console.log(this.usersdata.email);
        console.log(this.usersdata);
        console.log(this.userid);
        this.userservice.Displayfollowing().subscribe( data2 => {
          this.followinglist = data2;
          // this.isfollowed();
          console.log(this.followinglist);
          this.isfollowed();
        });
      });
    });
  }
  follow() {
    console.log(this.userid);
    this.userservice.followuser(this.userid).subscribe(data => {
        this.useradded = data;
        // this.followingservice.isfollowing(true);
      });
  }
  isfollowed() {
  // return this.followingservice.isfollowing(this.userid).subscribe( data => {
  //   this.followed = data;
  //   return this.followed;
  // });
    for (let i in this.followinglist) {
    if (this.followinglist[i].users.id === this.userid) {
      console.log('in followed');
      console.log(this.followinglist[i]);
      this.followed = true;
    }}

  }

}
