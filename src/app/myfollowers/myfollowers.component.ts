import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-myfollowers',
  templateUrl: './myfollowers.component.html',
  styleUrls: ['./myfollowers.component.scss']
})
export class MyfollowersComponent implements OnInit {

  constructor( private userservice: UsersService) { }
  myfollowerslist;
  ngOnInit() {
    this.userservice.myfollowers().subscribe( data => {
      this.myfollowerslist = data;
    });
  }

}
