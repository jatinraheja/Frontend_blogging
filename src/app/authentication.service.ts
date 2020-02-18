import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppService} from './app.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private service: AppService) {}
  authenticate(username, password) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.http.get('http://localhost:9090/user/allusers', {headers})
      .pipe(
        map(
          data => {
            sessionStorage.setItem('token', btoa(username + ':' + password));

          }
        ));
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('token');

    return (user === null)
  }
  logout() {
    sessionStorage.removeItem('token');
    this.service.isLoggedIn(false);
  }
}
