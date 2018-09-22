import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrinkComponent } from './drink.component';
import { JuiceComponent } from './juice/juice.component';
import { WaterComponent } from './water/water.component';
import { DrinkRoutingModule } from './drink-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DrinkRoutingModule
  ],
  declarations: [
    DrinkComponent, 
    JuiceComponent, 
    WaterComponent
  ],
  bootstrap: [DrinkComponent]
})
export class DrinkModule { }
