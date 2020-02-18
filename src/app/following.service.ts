import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FollowingService {

  constructor(private http: HttpClient) { }
  // isfollowing(bool: boolean) {
  //   localStorage.setItem('following', String(bool));
  //   return bool;
  // }
  // checkfollowing() {
  //   const following = localStorage.getItem('following');
  //   return JSON.parse(following);
  // }
  isfollowing(userid) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.http.get('http://localhost:9090/follow/following/' + userid, {headers});
  }
}
