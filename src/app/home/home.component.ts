import {Component, Input, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';
import {BlogsdataService} from '../blogsdata.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Blogdata} from '../blog';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  constructor(config: NgbCarouselConfig, private blogsdata: BlogsdataService, private route: Router,
              private activatedroute: ActivatedRoute) {
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }
public blogs;

public search;

  ngOnInit() {
    this.activatedroute.paramMap.subscribe((param: ParamMap) => {
      this.search = param.get('search');
      if (this.search != undefined) {
        this.blogsdata.getblogbywriter(this.search).subscribe( data => {
          this.blogs = data;
        });
      } else {
        this.blogsdata.gethomedata().subscribe(data => {
          this.blogs = data;
        });
      }
    });
    // this.homedata();
    // if (this.search !== '') {
    //   this.homedatabysearch();
    // }
  }
  getdetails(id) {
    this.route.navigate(['/details', id]);
  }
  // homedata() {
  // console.log('inside homedata');
  //   console.log(this.blogs[0]);
  // }
  // homedatabysearch() {
  //   console.log('inside homedatabysearch method');
  //   console.log(this.search);
  //   console.log(this.blogs[0]);
  //   for( var i = 0; i < this.blogs.length; i++) {
  //    if (this.blogs[i].writer === this.search) {
  //      this.blogs2.push(this.blogs[i]);
  //    }
  //  }
  //   console.log(this.blogs2[0]);
  //   this.blogs = this.blogs2;
  //  }
  searchvalue() {
    if (this.search != undefined) {
      this.blogsdata.getblogbywriter(this.search).subscribe(data => {

        this.blogs = data;
      });
    }

  }
  getblogbycategory(cat) {
    this.blogsdata.getblogbycategory(cat).subscribe( data => {
      this.blogs = data;
    });
  }
  // userprofile(id) {
  //   this.route.navigate(['/userprofile', id]);
  // }
  gotouserprofile(username) {
    this.route.navigate(['/userprofile', username]);
  }
}

