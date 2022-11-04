import { Injectable } from '@angular/core';
import { Food } from 'src/app/models/food';
import { Tag } from 'src/app/models/tag';
import food from '../../../assets/data/food.json';
import tags from '../../../assets/data/tags.json';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  Food:Food[]=food;
  Tags:Tag[]=tags;

  constructor() { }

  //dohvatanje po tagu
  getAllFoodByTag(tag:string):Food[]{
    return tag=="All" ? this.getAllFood() : this.getAllFood().filter(f=>f.tags?.includes(tag));
    // if(tag=='All')
    // return this.getAllFood();
    // else
    // return this.getAllFood().filter(f=>f.tags?.includes(tag));
  }

  //single food

  getFoodById(id:number):Food{
    return this.getAllFood().find(f=>f.id==id)!;
  }


  //dohvatanje svih tagova

  getAllTags():Tag[]{
     return this.Tags;
  }


  //dohvatanje svih hrana
  getAllFood():Food[]{
    
    //prekopirace se i dohvatiti iz posebnog json objekta
    return this.Food;
  }
}
