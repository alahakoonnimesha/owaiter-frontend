import { Injectable } from '@angular/core';
import { Observable ,of} from 'rxjs';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
//import {Observable} from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { User } from '../../database/user';
import { HttpHeaders } from '@angular/common/http';




@Injectable()
export class UserService {
  private baseurl:string='http://localhost:8080/users'; 
 
  private options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  
  

  constructor(private http: HttpClient) { }

  getUsers() { 
    return this.http.get<User[]>(this.baseurl + '/all');
  }
  createUser(user:User){ 
    return this.http.post(this.baseurl + '/createuser',user,this.options);
  }
}

