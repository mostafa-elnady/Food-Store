import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];

  constructor(
    private foodServices: FoodService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm){
       this.foods =  foodServices.getAllFoodBySearchTerm(params.searchTerm)
      }else {

        this.foods = foodServices.getAll();
      }
    });
  }

  ngOnInit(): void {}
}
