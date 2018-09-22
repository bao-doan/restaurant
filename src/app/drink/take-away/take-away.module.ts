import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TakeAwayComponent } from './take-away.component';
import { TakeAwayRoutingModule } from './take-away-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TakeAwayRoutingModule
  ],
  declarations: [TakeAwayComponent]
})
export class TakeAwayModule { }
