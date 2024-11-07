import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomizationRoutingModule } from './customization-routing.module';
import { CustomizationComponent } from './customization.component';


@NgModule({
  declarations: [CustomizationComponent],
  imports: [
    CommonModule,
    CustomizationRoutingModule
  ]
})
export class CustomizationModule { }
