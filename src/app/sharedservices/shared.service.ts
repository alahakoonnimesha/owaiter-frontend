import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private currentItemsCount=new BehaviorSubject(0);
  currentmsg=this.currentItemsCount.asObservable();

  constructor() {}

    updateCartCount(count:number)
    {
 
      this.currentItemsCount.next(count);
    }
   
  }
