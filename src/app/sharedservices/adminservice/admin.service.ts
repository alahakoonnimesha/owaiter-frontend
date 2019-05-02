import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Admin } from '../../database/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseurl:string='http://localhost:8080/admins';
  private options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  admin:Admin;
  

  
  constructor(private http: HttpClient) { }

  getAdmins() { 
    return this.http.get<Admin[]>(this.baseurl + '/all');
  }

  createAdmin(admin:Admin){ 
    return this.http.post(this.baseurl + '/createadmin',admin,this.options);
  }
  

  deleteAdmin(id:number) { 
    return this.http.delete(this.baseurl + '/admin/'+id)
  }
  

addAdmin(admin:Admin) { 
    return this.http.post(this.baseurl + '/table',JSON.stringify(admin),this.options)
  }
  editAdmin(id:Number,table:Admin)
  {
    return this.http.put(this.baseurl + '/admin/'+id,JSON.stringify(table),this.options)
  }

setter(admin:Admin)
{
  this.admin=admin;
}
getter()
{
  return this.admin;
}

adminlogin()
{
  return this.http.get<Admin[]>(this.baseurl+'/login');
}
}

