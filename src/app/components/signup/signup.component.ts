import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model:Signupdetails = 
  {
    name:'',
    email:''
  }
  constructor() { }

  ngOnInit() {
  }
    sendFeedBack():void
    {
      alert(this.model.name);
    }
  
}

export interface Signupdetails
{
  name:string;
  email:string;
}
