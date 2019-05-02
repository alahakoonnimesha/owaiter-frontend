import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../sharedservices/authservice/auth.service';
import { UserService } from '../../sharedservices/userservice/user.service';
import { Tokentparams } from '../../database/tokentparams';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice:AuthService,private user:UserService,private http:Http,router:Router) { }

  ngOnInit() {
  }
tokenparams:Tokentparams;
username:string;
password:string;

  loginUser():void
  {
    this.authservice.login(this.username,this.password).subscribe
    (
      data =>
      {
        this.tokenparams[2]=data;
        this.authservice.AccessToken=this.tokenparams.access_token;
        location.reload();
        console.log("login success");
      },
      err=>
      {
        console.log(err);
      }
    );
  }
  loginUse1r(event)
  {
    /*event.preventDefault();
    const target=event.target
    //const email=target.getElementById('email');
    //const password=target.getElementById('password');
    const email=target.querySelector('#email').value;
    const password=target.querySelector('#password').value;
    this.auth.getUserDetails(email,password).subscribe(data=>
    {
      if(data.success){
        //redirect to reserve
      }
      else{
        window.alert("invalid!");
      }
    })
    console.log(email,password)*/
    var email=document.getElementById('email').nodeValue; //.value
    var password=document.getElementById('password').nodeValue // .value

    if(email=="admin@gmail.com"&& password=="1234"){
      //home page

    }else{
      alert('Incorrect Login Details');
    }

  }
}

