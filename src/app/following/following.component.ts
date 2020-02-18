import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UsersService} from '../users.service';
import {FollowingService} from '../following.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {

  constructor(private http: HttpClient, private usersservice: UsersService, private followservice: FollowingService) {
  }

  followinglist;
  deletionsring;
  ngOnInit() {
    this.usersservice.Displayfollowing().subscribe(data => {
      this.followinglist = data;
    });
  }

  following() {
  }

  unfollow(userid) {
    this.usersservice.unfollowuser(userid).subscribe( data => {
      this.deletionsring = data;
      this.followservice.isfollowing(false);
      window.location.reload();
    });
  }
}
