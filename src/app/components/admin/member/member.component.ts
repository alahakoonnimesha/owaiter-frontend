import { Component, OnInit } from '@angular/core';
import { Admin } from '../../../database/admin';

import { Router } from '@angular/router';
import { AdminService } from '../../../sharedservices/adminservice/admin.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  private admin=new Admin();
  admins:Admin[]=[];
  private adminError:Admin;
  private isCreated:boolean=false;
  private adminExists:boolean=false;
  constructor(private aservice:AdminService,private router:Router) { }
  ngOnInit() {

    this.getAllAdmins();
    this.addAdmin();
     this.admin=this.aservice.getter();
  }

  getAllAdmins()
  {
    return this.aservice.getAdmins().subscribe
    (
      res1 =>
      {
        this.admins=res1;
      },
      err =>
      {
        console.log(err);
      }
    );
  
  }
  addAdmin()
  {
    let admin = new Admin();
    this.aservice.setter(admin);
    
    //return this.table=this.tservice.getter();
    
  }
  createAdmin(){
    
    return this.aservice.createAdmin(this.admin).subscribe
    (
      res1 =>
      {
        console.log(res1)
        this.admin=new Admin();
        this.isCreated=true;
        this.adminExists=false;
        location.reload();
       
      },
      
      err =>
      {
        console.log(err)
        this.adminError=err.error;
        this.isCreated=false;
        if(err.status==409)
        {
          this.isCreated=false;
          this.adminExists=true;
      
        }
        
      }
    ); 
    
  }
  deleteAdmin(admin)
  {
    this.aservice.deleteAdmin(admin.id).subscribe
    (
      res2=>
      {
        this.admins.splice(this.admins.indexOf(admin),1);
      },
      err =>
      {
        console.log(err);
      }
    )
  }

  editAdmin(admin)
  {
    this.aservice.editAdmin(admin.id,admin).subscribe
    (
      res2=>
      {
        this.admin=admin;
      },
      err =>
      {
        console.log(err);
      }
    )

    
  }
  
  

  processform()
  {
    if(this.admin.id == undefined)
    {
      this.aservice.addAdmin(this.admin).subscribe
      (
        (res2) =>
        {
          console.log(res2);
          location.reload();
          //this._router.navigate(['/']);
        },
        err =>
        {
          console.log(err);
        }
      );

    }
    else if(this.admin.id == this.admin.id)
    {
      this.aservice.editAdmin(this.admin.id,this.admin).subscribe
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
  }
}
