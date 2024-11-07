import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImplementRoutingModule } from './implement-routing.module';
import { ImplementComponent } from './implement.component';

@NgModule({
  declarations: [ImplementComponent],
  imports: [CommonModule, ImplementRoutingModule],
})
export class ImplementModule {}
