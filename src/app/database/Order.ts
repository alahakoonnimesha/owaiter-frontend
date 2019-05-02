import { Time } from "@angular/common";

export class Order
{
    
    orderid:number;
    userid:number;
    itemid:number;
    itemname:String;
    qty:number;
    price:number;
    total:number;
    tableno:number;
    orderplace:Time;
    ordercheckin:Time;
    ordercheckout:Time;

}
