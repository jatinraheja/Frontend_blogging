import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  isLoggedIn(bool: boolean) {
    sessionStorage.setItem('auth', String(bool));
    return bool;
  }
  checklogin() {
    const auth = sessionStorage.getItem('auth');
    return JSON.parse(auth);
  }
}
