import { Component, OnInit } from '@angular/core';
import {UserService} from '../../sharedservices/user.service';
import {User} from '../../user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private users1:User[];

  constructor(private uservice:UserService) { }

  ngOnInit() {
    this.uservice.getUsers().subscribe((users1)=>{console.log(users1);},
    (error)=>{console.log(error);
    })
  }

}


