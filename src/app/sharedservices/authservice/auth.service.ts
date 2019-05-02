import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Tokentparams} from "../../database/tokentparams"
import { Http } from '@angular/http';
import {Headers} from '@angular/http';
import { map } from 'rxjs/operators';


const httpOptions=
{
  headers:new HttpHeaders({'content-type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http:HttpClient) { }


  AccessToken:string="";
  private loginurl="http://localhost:8080/users/login"
  private options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };



  login<Tokentparams>(username:string,password:string)

  {
    
    var data="grant_type=password&username"+username+"&password"+password;

    return this.http.post(this.loginurl,data).pipe(map(res=>res));
  }


  
  
}
