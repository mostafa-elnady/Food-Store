import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Tag } from 'src/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
tags:Tag[]=[]
  constructor(private foodServices:FoodService) {
    this.tags = foodServices.getAllTags()
  }

  ngOnInit(): void {
  }

}
