import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Fooditem } from '../../database/fooditem';
import { Table } from '../../database/table';
import { FooditemService } from '../../sharedservices/fooditemservice/fooditem.service';
import { TableService } from '../../sharedservices/tableservice/table.service';
import { SharedService } from '../../sharedservices/shared.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../database/user';
import { UserService } from '../../sharedservices/userservice/user.service';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-dinein',
  templateUrl: './dinein.component.html',
  styleUrls: ['./dinein.component.css'],
  
})



export class DineinComponent implements OnInit {


  items:Fooditem[];
  tables:Table[];
  table1:Table[];
  
  beverages:Fooditem[];

  desserts:Fooditem[];

 
  constructor(private uservice:UserService,private http:HttpClient,private fservice:FooditemService,private tservice:TableService,
  private route:Router) { }
  isClicked :boolean =false;  
  selectedTable:any;
 clickmsg='';
  avail;


  private user=new User();
  private userError:User;
  private isCreated:boolean=false;
  private userExists:boolean=false;
  private isAvail:boolean;


  ngOnInit() {

  
    this.getAlltables();
  }
  /*changeAvailability(table:Table){
    this.tservice.changeAvail( ).subscribe(
      data => {
        this.tableno = data;
      },
      err =>
      {
        console.log(err);
      }
    );
  
}*/
changeAvailability(table1)
{
  this.tservice.setter(table1);
  
}
 /*getAvailablity()
 {
   if (this.tservice.getAvail(false));
 } */
//start card comp


  getAlltables()
  {
    return this.tservice.getTables().subscribe
    (
      res1 =>
      {
        this.table1=res1;
      },
      err =>
      {
        console.log(err);
      }
    );

    
  
  }
//end card comd
disableFn(){
  
  this.setter1(this.table1);
}

//update new
setter1(table)
{
    this.tservice.setter(table);
    
}
updatTable6(x:number,tb:Table){
  this.tservice.newupdatetable(x,true,tb);
}
editTable(table)
  {
    this.tservice.editTable(table.tableno,table).subscribe
    (
      res2=>
      {
       res2=table.availability=false;
       //location.reload();
      },
      
      err =>
      {
        console.log(err);
      }
    )
    
    

    
  }

  logout()
    {
      location.reload();
      
    }

    
}
