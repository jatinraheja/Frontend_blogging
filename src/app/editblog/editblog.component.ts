import { Component, OnInit } from '@angular/core';
import {BlogsdataService} from '../blogsdata.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Blogdata} from '../blog';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.scss']
})
export class EditblogComponent implements OnInit {

  constructor(private blogdata: BlogsdataService, private route: ActivatedRoute, private http: HttpClient, private router: Router) {}
  blogid;
  blog;
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
  status;
  newblog: Blogdata;
  respdata;
  ngOnInit() {
        this.route.paramMap.subscribe((param: ParamMap) => {
          this.blogid = parseInt(param.get('id'));
          this.blogdata.getblogbyid(this.blogid).subscribe(data => {
            this.blog = data;
            this.name = this.blog.name;
            this.category = this.blog.category;
            this.img = this.blog.img;
            this.heading = this.blog.heading;
            this.h1 = this.blog.h1;
            this.detail1 = this.blog.detail1;
            this.detail11 = this.blog.detail11;
            this.detail12 = this.blog.detail12;
            this.detailh1 = this.blog.detailh1;
            this.detailh11 = this.blog.detailh11;
            this.detailh12 = this.blog.detailh12;
            this.h2 = this.blog.h2;
            this.detailh2 = this.blog.detailh2;
            this.detailh21 = this.blog.detailh21;
            this.detailh22 = this.blog.detailh22;
            this.status = this.blog.status;
          });
        });
  }
  editblog() {
    this.newblog = new Blogdata();
    this.newblog.name = this.name;
    this.newblog.category = this.category;
    this.newblog.img = this.img;
    this.newblog.heading = this.heading;
    this.newblog.h1 = this.h1;
    this.newblog.detail1 = this.detail1;
    this.newblog.detail11 = this.detail11;
    this.newblog.detail12 = this.detail12;
    this.newblog.detailh1 = this.detailh1;
    this.newblog.detailh11 = this.detailh11;
    this.newblog.detailh12 = this.detailh12;
    this.newblog.h2 = this.h2;
    this.newblog.detailh2 = this.detailh2;
    this.newblog.detailh21 = this.detailh21;
    this.newblog.detailh22 = this.detailh22;
    this.newblog.status = this.status;
    this.blogdata.editblogbyId(this.blogid, this.newblog).subscribe( data => {
      this.respdata = data;
      this.router.navigate(['details', this.blogid]);
    });
  }
  statusofblog(status) {
    this.status = status;
  }
}
