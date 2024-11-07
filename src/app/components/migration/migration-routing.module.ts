import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MigrationComponent } from './migration.component';

const routes: Routes = [
  {path:'',component:MigrationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MigrationRoutingModule { }
