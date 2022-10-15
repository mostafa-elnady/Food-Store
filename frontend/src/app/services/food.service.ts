import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from 'src/data';
import { Food } from 'src/shared/models/Food';
import { Tag } from 'src/shared/models/Tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAll(): Food[] {
    return sample_foods;
  }

  getAllFoodBySearchTerm(searchTerm: string) {
    return this.getAll().filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getAllTags(): Tag[] {
    return sample_tags;
  }

  getAllFoodByTagName(tag: string): Food[] {
    return tag == 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));
  }

  getFoodById(id: string): Food {
    return this.getAll().find((food) => (food.id == id)) || new Food();
  }
}
