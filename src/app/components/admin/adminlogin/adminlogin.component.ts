import { Component, OnInit } from '@angular/core';
import { Admin } from '../../../database/admin';
import { AdminService } from '../../../sharedservices/adminservice/admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
admin:Admin[];
  constructor(private aservice:AdminService) { }

  ngOnInit() {
  }

adminlogin()
{
  if(this.admin!=null)
  {
    return this.aservice.adminlogin().subscribe
    (
      
      res =>
      {
        this.admin=res;
        location.reload();
      },
      err =>
      {
          alert("error");
      }
    );
  }
}
}
