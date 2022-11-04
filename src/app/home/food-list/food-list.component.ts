import { Component, Input, OnInit } from '@angular/core';
import { Food } from '../../models/food';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  constructor() { }

  @Input() food!: Food;

  ngOnInit(): void {

   

  }

}
