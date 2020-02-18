import { Component, OnInit } from '@angular/core';
import {Blogdata} from '../blog';
import {HttpClient} from '@angular/common/http';
import {BlogsdataService} from '../blogsdata.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-myblogs',
  templateUrl: './myblogs.component.html',
  styleUrls: ['./myblogs.component.scss']
})
export class MyblogsComponent implements OnInit {

  constructor(private http: HttpClient, private blogsdata: BlogsdataService, private route: Router) { }
  private usersblogs;
  private result;
  ngOnInit() {
   this.blogsdata.myblogs().subscribe( data => {
    this.usersblogs = data;
  });
  }
  getdetails(id) {
    this.route.navigate(['/details', id]);
  }
  gotoedit(id) {
    this.route.navigate(['/edit', id]);
  }
  deleteblog(id) {
    const conf = confirm('Are you want to remove this blog permanently?');
    if (conf) {
      this.blogsdata.deleteblogbyuser(id).subscribe(data => {
        this.result = data;
        this.blogsdata.deleteblogbyId(id).subscribe();
        window.location.reload();

      });
    }
  }

}
