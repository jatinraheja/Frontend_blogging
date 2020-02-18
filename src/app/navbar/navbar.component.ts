import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../app.service';
import {AuthenticationService} from '../authentication.service';
import {BlogsdataService} from '../blogsdata.service';
import {InteractioncomponentsService} from '../interactioncomponents.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private appservice: AppService, private loginservice: AuthenticationService, private blogdata: BlogsdataService) { }
  // @Output() public searchevent = new EventEmitter();
  public search;
  ngOnInit() {
  }
  gotologin() {
    this.router.navigate(['/login']);
  }
  gotohome() {
    this.router.navigate(['/home']);
  }
  gotoprofile() {
    this.router.navigate(['/profile']);
  }
  searchvalue() {
    this.router.navigate(['/home', this.search]);
  }
  gotoaddblock() {
    this.router.navigate(['/addblog']);
  }
  gotomyblog() {
    this.router.navigate(['/myblog']);
  }
  gotofollowing() {
    this.router.navigate(['/following']);
  }
}
