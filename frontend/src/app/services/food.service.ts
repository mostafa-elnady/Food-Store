import { Injectable } from '@angular/core';
import { sample_foods } from 'src/data';
import { Food } from 'src/shared/models/Food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAll(): Food[] {
    return sample_foods;
  }

  getAllFoodBySearchTerm(searchTerm: string) {
    return sample_foods.filter((food) => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }


}
