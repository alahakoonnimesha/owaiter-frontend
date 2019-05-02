import { Component, OnInit } from '@angular/core';
import { Table } from '../../../database/table';
import { TableService } from '../../../sharedservices/tableservice/table.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tables:Table[]=[];
  table:Table;
  constructor(private tservice:TableService,private _router:Router) { }

  ngOnInit() {

    this.getAlltables();
    this.addTable();
    return this.table=this.tservice.getter();

    
  }

  getAlltables()
  {
    return this.tservice.getTables().subscribe
    (
      res1 =>
      {
        this.tables=res1;
      },
      err =>
      {
        console.log(err);
      }
    );
  
  }
  deleteTable(table)
  {
    this.tservice.deleteTable(table.tableno).subscribe
    (
      res2=>
      {
        this.tables.splice(this.tables.indexOf(table),1);
      },
      err =>
      {
        console.log(err);
      }
    )
  }

 editTable(table)
  {
    this.tservice.editTable(table.tableno,table).subscribe
    (
      res2=>
      {
        this.table=table;
      },
      err =>
      {
        console.log(err);
      }
    )

    
  }
  addTable()
  {
    let table = new Table();
    this.tservice.setter(table);
    
   // return this.table=this.tservice.getter();
    
  }
  
  /*newupdatetable(tableno:number,value:any)
  {
    this.tservice.newupdatetable(tableno,value);
  }*/

  processform()
  {
    if(this.table.tableno == undefined)
    {
      this.tservice.addTable(this.table).subscribe
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
    else if(this.table.tableno == this.table.tableno)
    {
      this.tservice.editTable(this.table.tableno,this.table).subscribe
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
