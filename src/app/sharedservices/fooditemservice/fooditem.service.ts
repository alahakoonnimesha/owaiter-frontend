import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Fooditem } from '../../database/fooditem';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FooditemService {
  //admin item
  private baseurl:string='http://localhost:8080/items';
  private options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  item:Fooditem;
  constructor(private http: HttpClient) { }



  //given
    getItems() { 
      return this.http.get<Fooditem[]>(this.baseurl + '/all')
    }

    addItemToOrder(prodcuts: any) {
      localStorage.setItem("item", JSON.stringify(this.item));
    }
    getItemFromItems() {
      //return localStorage.getItem("product");
      return JSON.parse(localStorage.getItem('item'));
    }
    removeAllItemsFromOrder() {
      return localStorage.removeItem("item");
    }
    errorHandler(error: Response) {  
      console.log(error);  
      return (error);  
  } 


  ///

    deleteItem(itemno:number) { 
      return this.http.delete(this.baseurl + '/item/'+itemno)
    }
    addItem(item:Fooditem) { 
      return this.http.post(this.baseurl + '/item', JSON.stringify(item),this.options)
    }

    editItem(item)
    {
      return this.http.put(this.baseurl + '/item', JSON.stringify(item),this.options)
    }

  setter(item:Fooditem)
  {
    this.item=item;
  }
  getter()
  {
    return this.item;
  }

  

  //customer menu


  getItemsMeal()
  {
    return this.http.get<Fooditem[]>(this.baseurl + '/type/meal/{"meal"}')
  }
  getItemsBeverage()
  {
    return this.http.get<Fooditem[]>(this.baseurl + '/type/beverage/{"beverage"}')
  }
  getItemsDessert()
  {
    return this.http.get<Fooditem[]>(this.baseurl + '/type/dessert/{"dessert"}')
  }

//options




}


