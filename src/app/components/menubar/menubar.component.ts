import { Component, OnInit } from '@angular/core';
import { Fooditem } from '../../database/fooditem';
import { FooditemService } from '../../sharedservices/fooditemservice/fooditem.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
items:Fooditem[]=[];
  constructor(private fservice:FooditemService) { }

  ngOnInit() {
  }



}
