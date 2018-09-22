import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { TakeAwayComponent } from './take-away.component';
const take: Routes = [
  { path: '', component: TakeAwayComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(take)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  bootstrap: [TakeAwayComponent]
})
export class TakeAwayRoutingModule { }
