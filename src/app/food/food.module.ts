import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodComponent } from './food.component';
import { FastFoodComponent } from './fast-food/fast-food.component';
import { DesertComponent } from './desert/desert.component';
import { BurgerComponent } from './fast-food/burger/burger.component';
import { BurgerVegetableComponent } from './fast-food/burger/burger-vegetable/burger-vegetable.component';
import { BurgerMeatComponent } from './fast-food/burger/burger-meat/burger-meat.component';
import { FriedComponent } from './fast-food/fried/fried.component';
import { FoodRoutingModule } from './/food-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FoodRoutingModule
  ],
  declarations: [
    FoodComponent, 
    FastFoodComponent, 
    DesertComponent, 
    BurgerComponent, 
    BurgerVegetableComponent, 
    BurgerMeatComponent, 
    FriedComponent
  ],
  bootstrap: [FoodComponent]
})
export class FoodModule { }
