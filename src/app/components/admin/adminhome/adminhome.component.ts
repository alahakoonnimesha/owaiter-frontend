import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../../../database/Order';
import { OrderService } from '../../../sharedservices/orderservice/order.service';
import { Fooditem } from '../../../database/fooditem';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  selectedFile=null;

  //getall
  items:Order[]=[];
  //get
  item:Order;
  //items
  item1:Fooditem[]=[];
  constructor(private oservice:OrderService,private _router:Router) { }

  ngOnInit() {
  }
  getAllOrders()
  {
    return this.oservice.getItems().subscribe
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

  deleteOrder(item)
  {
    this.oservice.deleteItem(item.itemno).subscribe
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
    this.oservice.setter(item);
    
  }
  addItem()
  {
    let item = new Order();
    this.oservice.setter(item);
    
    //return this.table=this.tservice.getter();
    
  }
  

  processform()
  {
    if(this.item.orderid == undefined)
    {
      this.oservice.addItem(this.item).subscribe
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
      this.oservice.editItem(this.item).subscribe
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
