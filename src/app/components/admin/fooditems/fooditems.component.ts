import { Component, OnInit } from '@angular/core';
import { Fooditem } from '../../../database/fooditem';
import { FooditemService } from '../../../sharedservices/fooditemservice/fooditem.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fooditems',
  templateUrl: './fooditems.component.html',
  styleUrls: ['./fooditems.component.css'],
  
})
export class FooditemsComponent implements OnInit {
  //image
  selectedFile=null;

  //getall
  items:Fooditem[]=[];
  //get
  item:Fooditem;
  constructor(private fservice:FooditemService,private _router:Router) { }

  ngOnInit() {

    this.getAllitems();
    this.addItem();
    this.item=this.fservice.getter();
  
    
  }

  getAllitems()
  {
    return this.fservice.getItems().subscribe
    (
      res1 =>
      {
        this.items=res1;
      },
      err =>
      {
        console.log(err);
      }
    );
  
  }

  deleteItem(item)
  {
    this.fservice.deleteItem(item.itemno).subscribe
    (
      res2=>
      {
        this.items.splice(this.items.indexOf(item),1);
      },
      err =>
      {
        console.log(err);
      }
    )
  }

 editItem(item)
  {
    this.fservice.setter(item);
    
  }
  addItem()
  {
    let item = new Fooditem();
    this.fservice.setter(item);
    
    //return this.table=this.tservice.getter();
    
  }
  

  processform()
  {
    if(this.item.itemno == undefined)
    {
      this.fservice.addItem(this.item).subscribe
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
        }
      )

    }
    else
    {
      this.fservice.editItem(this.item).subscribe
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

  /*onFileSelected(event)
  {
    console.log(event);
    this.selectedFile =event.target.files[0];
  }

  onUpload()
  {
    this.http.post();
  }*/


}

