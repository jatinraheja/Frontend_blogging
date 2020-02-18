import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Blogdata} from '../blog';
import {BlogsdataService} from '../blogsdata.service';
import {UsersService} from '../users.service';
import {Userdata} from '../userdata';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.scss']
})
export class AddblogComponent implements OnInit {

  constructor(private http: HttpClient, private blogdataservice: BlogsdataService,
              private userdataservice: UsersService, private route: Router) { }
    category;
    heading;
    h1;
    h2;
    detail1;
    detail11;
    detail12;
    detailh1;
    detailh11;
    detailh12;
    detailh2;
    detailh21;
    detailh22;
    writer;
    name;
    img;
    blogdata: Blogdata;
    respdata;
    userdata;
    respdata2;
  // httpoptions = {
  //   headers : new HttpHeaders({
  //     'Content-Type' : 'application/json'
  //
  //   })

  ngOnInit() {
    this.userdataservice.getuser().subscribe( data => {
      this.userdata = new Userdata();
      this.userdata = data;
      this.writer = this.userdata.username;
    });
  }
  addblog() {
    this.blogdata = new Blogdata();
    this.blogdata.category = this.category;
    this.blogdata.heading = this.heading;
    this.blogdata.name = this.name;
    this.blogdata.detail1 = this.detail1;
    this.blogdata.detail11 = this.detail11;
    this.blogdata.detail12 = this.detail12;
    this.blogdata.h1 = this.h1;
    this.blogdata.img = this.img;
    this.blogdata.writer = this.writer;
    this.blogdata.detailh1 = this.detailh1;
    this.blogdata.detailh11 = this.detailh11;
    this.blogdata.detailh12 = this.detailh12;
    this.blogdata.h2 = this.h2;
    this.blogdata.detailh2 = this.detailh2;
    this.blogdata.detailh21 = this.detailh21;
    this.blogdata.detailh22 = this.detailh22;
    this.blogdataservice.addblog(this.blogdata).subscribe( data => {
      this.respdata = data;
      this.blogdataservice.getusersblog(this.respdata.id).subscribe( data2 => {
        this.respdata2 = data2;
      });
    });
    alert('blog added');
    this.route.navigate(['/home']);
  }
}
