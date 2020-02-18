import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractioncomponentsService {
  constructor() { }
  private searchmessagesource = new Subject<string>();
  searchmessage$ = this.searchmessagesource.asObservable();
  sendmessage(message)
  {
    this.searchmessagesource.next(message);
  }
}
