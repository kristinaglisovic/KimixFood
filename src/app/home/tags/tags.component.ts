import { Component, OnInit } from '@angular/core';
import { Tag } from '../../models/tag';
import { FoodService } from '../../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags:Tag[]=[];

 
  
  constructor(private fs:FoodService) { }

  selectedIndex=0;
  setIndex(index: number) {
    this.selectedIndex = index;
  }

  
  ngOnInit(): void {
    this.tags=this.fs.getAllTags();
  }

}
