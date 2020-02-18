import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Userdata} from './userdata';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private route: Router, private http: HttpClient) { }
  getuser() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.http.get('http://localhost:9090/user/users', {headers});
  }
  updateuser(id, pdata: Userdata) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.http.put('http://localhost:9090/user/updateuser/' + id, pdata, {headers});
  }
  getuserbyid(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.http.get('http://localhost:9090/user/getuser/' + id, {headers});
  }
  getuserbyusername(username) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.http.get('http://localhost:9090/user/allusers/' + username, {headers});
  }
  followuser(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.http.get('http://localhost:9090/follow/addfollowing/' + id, {headers});
  }
  Displayfollowing() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.http.get('http://localhost:9090/follow/following', {headers});
  }
  unfollowuser(userid) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.http.get('http://localhost:9090/follow/delete/' + userid, {headers});
  }
  myfollowers() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.http.get('http://localhost:9090/follow/myfollowers', {headers});
  }
}
