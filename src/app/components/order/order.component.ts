import { Component, OnInit } from '@angular/core';
import { Fooditem } from '../../database/fooditem';
import { FooditemService } from '../../sharedservices/fooditemservice/fooditem.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
defaultQty:number=1;
itemsAddedToOrder:Fooditem[];
allTotal:number;

  constructor(private fservice:FooditemService) { }

  ngOnInit() {

    this.itemsAddedToOrder=this.fservice.getItemFromItems();
    for(let i in this.itemsAddedToOrder)
    {
    }

    this.fservice.removeAllItemsFromOrder();
    this.fservice.addItemToOrder(this.itemsAddedToOrder);
    
  }
  /*onAddQty(item:Fooditem)
  {
    this.itemAddedToOrder=this.fservice.getitemFromitems();
    this.itemAddedToOrder.find(p=>.id==item.id).qty=item.qty+1;
    this.fservice.removeAllItemsFromItems();
    this.fservice.addItemToOrder(this.itemAddedToOrder);
    this.calAllTotal(this.ItemsaddedtoOrder);
  }


  onReomveQty(item:Fooditem)
{
  this.itemAddedToOrder=this.fservice.getitemFromitems();
  this.itemAddedToOrder.find(p=>.id==item.id).qty=item.qty-1;
  this.fservice.removeAllItemsFromItems();
  this.fservice.addItemToOrder(this.itemAddedToOrder);
  this.calAllTotal(this.ItemsaddedtoOrder);

}

calAllTotal(allItems:Fooditem[])
{
  let total=0;
  for(let i in allItems)
  {
      total=total+allItems[i.].qty*allItems[i].price
  }
}*/

}


