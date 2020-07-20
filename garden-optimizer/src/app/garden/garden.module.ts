import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { GardenRoutingModule } from './garden-routing.module';
import { GardenComponent } from './garden.component';


@NgModule({
  declarations: [
    GardenComponent
  ],
  imports: [
    GardenRoutingModule,
    SharedModule
  ]
})
export class GardenModule { }
