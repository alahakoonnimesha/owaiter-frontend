import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,of} from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
//import {Observable} from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';




@Injectable()
export class UserService {
  private baseurl:String='http://localhost:8080/users';
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers:this.headers});

  constructor(private http: Http) { }

  getUsers(){
    return this.http.get(this.baseurl+"/all",this.options).pipe(map((response:Response) => response.json()))
    .pipe(catchError(this.errorhandler));
  }

 errorhandler(error:Response)
 {
   return Observable.throw(error||'server error');
 }
}

