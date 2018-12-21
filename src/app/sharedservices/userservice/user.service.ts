import { Injectable } from '@angular/core';
import { Observable ,of} from 'rxjs';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
//import {Observable} from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { User } from '../../user';
import { errorHandler } from '@angular/platform-browser/src/browser';






@Injectable()
export class UserService {
  private baseurl:string='http://localhost:8080/users/all';
  

  constructor(private http: HttpClient) { }

  getUsers() { 
    return this.http.get<User[]>(this.baseurl)
  }
}

