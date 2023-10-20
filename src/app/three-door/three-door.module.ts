import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThreeDoorPageRoutingModule } from './three-door-routing.module';

import { ThreeDoorPage } from './three-door.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThreeDoorPageRoutingModule
  ],
  declarations: [ThreeDoorPage]
})
export class ThreeDoorPageModule {}
