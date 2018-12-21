import { Component, OnInit } from '@angular/core';
import {UserService} from '../../sharedservices/userservice/user.service';
import {User} from '../../user';
import {Router} from "@angular/router";
import {HttpClientModule} from '@angular/common/http';
import {Http} from '@angular/http';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[]=[];

  constructor(private uservice:UserService) { }

  ngOnInit() {
    return this.uservice.getUsers().subscribe
    (
      res =>
      {
        this.users=res;
      },
      err =>
      {
          alert("error");
      }
    );
  } 
    
  

  }
  

