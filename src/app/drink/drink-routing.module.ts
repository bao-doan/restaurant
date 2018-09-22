import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { JuiceComponent} from './juice/juice.component'
import { WaterComponent} from './water/water.component'
import { DrinkComponent } from './drink.component';

const drink: Routes = [
  { path:'', component: DrinkComponent, children: [
    { path:'juice', component: JuiceComponent},
    { path:'water', component: WaterComponent},
    { path:'take-away', loadChildren: './take-away/take-away.module#TakeAwayModule'},
  ]
  }
  
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(drink)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class DrinkRoutingModule { }
