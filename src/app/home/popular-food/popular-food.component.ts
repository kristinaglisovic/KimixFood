import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../../models/food';
import { FoodService } from '../../services/food/food.service';
 
@Component({
  selector: 'app-popular-food',
  templateUrl: './popular-food.component.html',
  styleUrls: ['./popular-food.component.css']
})
export class PopularFoodComponent implements OnInit {

  foods:Food[]=[];
  p: number = 1;
  constructor(private fs:FoodService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    //SEARCHHHH
    this.route.params.subscribe(params=>{
      if(params['searchItem'])
      //po imenu
      this.foods=this.fs.getAllFood().filter(f=>f.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      //po tagu
      else if(params['tag'])
      this.foods=this.fs.getAllFoodByTag(params['tag']); 
      else
    //SVE HRANE  
      this.foods=this.fs.getAllFood();
    })

  }
}
