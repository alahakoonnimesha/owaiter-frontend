import { Component, OnInit } from '@angular/core';
import { UserService } from '../../sharedservices/userservice/user.service';
import { User } from '../../database/user';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 /* model:Signupdetails = 
  {
    name:'',
    email:''
  }*/
  private user=new User();
  private userError:User;
  private isCreated:boolean=false;
  private userExists:boolean=false;
  constructor(private uservice:UserService,private router:Router) { }

  ngOnInit() {}

  createUser(){
      return this.uservice.createUser(this.user).subscribe
      (
        res1 =>
        {
          console.log(res1)
          this.user=new User();
          this.isCreated=true;
          this.userExists=false;
          location.reload();
          
         
        },
        err =>
        {
          console.log(err)
          this.userError=err.error;
          this.isCreated=false;
          if(err.status==409)
          {
            this.isCreated=false;
            this.userExists=true;
        
          }
          
        }
      ); 
      
    }
     /* sendFeedBack():void
      {
        alert(this.model.name);
      }*/
    
  

/*
export interface Signupdetails
{
  name:string;
  email:string;
}*/

/*addUser()
  {
    let table = new User();
    this.tservice.setter(table);
    
    //return this.table=this.tservice.getter();
    
  }
  

  processform()
  {
    if(this.table.tableno == undefined)
    {
      this.tservice.addTable(this.table).subscribe
      (
        res2=>
        {
          console.log(res2);
          location.reload();
          //this._router.navigate(['/']);
        },
        err =>
        {
          console.log(err);
        }
      )

    }
    else
    {
      this.tservice.editTable(this.table).subscribe
      (
        res2=>
        {
          console.log(res2);
          location.reload();
          //this._router.navigate(['/']);
        },
        err =>
        {
          console.log(err);
        })
    }
  }*/

  
}