import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Order } from '../../database/Order';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseurl:string='http://localhost:8080/orders';

  private options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  order:Order;
  constructor(private http: HttpClient) { }
    getItems() { 
      return this.http.get<Order[]>(this.baseurl + '/all')
    }

    deleteItem(itemno:number) { 
      return this.http.delete(this.baseurl + '/order/'+itemno)
    }
    addItem(item:Order) { 
      return this.http.post(this.baseurl + '/order', JSON.stringify(item),this.options)
    }

    editItem(item)
    {
      return this.http.put(this.baseurl + '/rder', JSON.stringify(item),this.options)
    }

  setter(item:Order)
  {
    this.order=item;
  }
  getter()
  {
    return this.order;
  }
}
