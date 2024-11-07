import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImplementComponent } from './implement.component';

const routes: Routes = [
  {path:'',component:ImplementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImplementRoutingModule { }
