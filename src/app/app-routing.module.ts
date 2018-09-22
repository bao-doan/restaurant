import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'food', loadChildren: './food/food.module#FoodModule' },
  { path: 'drink', loadChildren: './drink/drink.module#DrinkModule' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
