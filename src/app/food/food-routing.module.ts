import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { FoodComponent } from './food.component';
import { FastFoodComponent } from './fast-food/fast-food.component';
import { DesertComponent } from './desert/desert.component';
import { BurgerComponent } from './fast-food/burger/burger.component';
import { FriedComponent } from './fast-food/fried/fried.component';
import { BurgerMeatComponent } from './fast-food/burger/burger-meat/burger-meat.component';
import { BurgerVegetableComponent } from './fast-food/burger/burger-vegetable/burger-vegetable.component';

const food: Routes = [
  { path: '', component: FoodComponent, children:
    [
      { path:'desert', component: DesertComponent},
      { path:'fast-food', component: FastFoodComponent, children: 
       [
          { path: 'burger', component: BurgerComponent, children: 
            [
              { path: 'burger-meat', component: BurgerMeatComponent},
              { path: 'burger-vegetable', component: BurgerVegetableComponent},
            ]
          },
          { path: 'fried', component: FriedComponent},
        ]
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(food),
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  bootstrap: [FoodComponent]
})
export class FoodRoutingModule { }
