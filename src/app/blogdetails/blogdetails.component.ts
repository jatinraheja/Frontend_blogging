import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BlogsdataService} from '../blogsdata.service';
import {Blogdata} from '../blog';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.scss']
})
export class BlogdetailsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private blogdata: BlogsdataService) { }
  productdetails;
  productid;
  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.productid = parseInt(param.get('id'));

    });
    this.blogdata.getblogbyid(this.productid).subscribe( data => {
      this.productdetails = data;
    });
  }

}
