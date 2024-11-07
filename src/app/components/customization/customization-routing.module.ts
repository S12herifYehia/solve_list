import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomizationComponent } from './customization.component';

const routes: Routes = [
  {path:'',component:CustomizationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomizationRoutingModule { }
