import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Userdata} from './userdata';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  httpoptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'

    })
  };
  constructor(private http: HttpClient) { }
  adddata(user: Userdata) {
    return this.http.post('http://localhost:9090/signup/savedata', user , this.httpoptions );
  }
}
