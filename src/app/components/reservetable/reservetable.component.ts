import { Component, OnInit } from '@angular/core';
import {Table} from '../../database/table';
import { TableService } from '../../sharedservices/tableservice/table.service';

@Component({
  selector: 'app-reservetable',
  templateUrl: './reservetable.component.html',
  styleUrls: ['./reservetable.component.css']
})
export class ReservetableComponent implements OnInit {
  tables:Table[]=[];

  constructor(private tservice:TableService) { }

  ngOnInit() {

    return this.tservice.getTables().subscribe
    (
      
      res =>
      {
        this.tables=res;
      },
      err =>
      {
          alert("error");
      }
    );
  }

}
