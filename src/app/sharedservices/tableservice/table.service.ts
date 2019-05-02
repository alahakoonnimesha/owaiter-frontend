import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { Table } from '../../database/table';
import { Observable ,of} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';


@Injectable()
export class TableService {
  private baseurl:string='http://localhost:8080/tables';
  private options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  table:Table;
  constructor(private http: HttpClient) { }
  getTables() { 
    return this.http.get<Table[]>(this.baseurl + '/all')
  }

  deleteTable(tableno:number) { 
    return this.http.delete(this.baseurl + '/table/'+tableno)
  }
  addTable(table:Table) { 
    return this.http.post(this.baseurl + '/table',JSON.stringify(table),this.options)
  }

  editTable(tableno:Number,table:Table)
  {
    return this.http.put(this.baseurl + '/table/'+tableno,JSON.stringify(table),this.options)
  }
  editTable2(tableno:number)
  {
    return this.http.put(this.baseurl + '/table/avail'+tableno,JSON.stringify(tableno),this.options)
  }

setter(table:Table)
{
  this.table=table;
  
}
/*setter1(table:Table)
{
  
  return this.http.put(this.baseurl + '/table/available',JSON.stringify(table),this.options).pipe(map((response:Response)
=>response.json().catch(this.errorHandler);

  
}*/

errorHandler(error:Response)
{
  return Observable.throw(error||"SerVer Error");
}
getter()
{
  return this.table;
}

////
newupdatetable(tableno:number,value:any,table:Table):Observable<Object>
{
  if(value==true){
      table.availability=false;
  }
  return this.http.put('${this.baseurl}' + '${/table/available}',value);
}

///
getAvail()
{
  return this.table.availability;
}

setAail(table:Table)
{
  this.table=table;
}
changeAvail(table)
{
  return this.http.put(this.baseurl + '/table/changeavail', table.availability =!table.availability ,this.options)
 
}


}


