import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Door3PuzzlePageRoutingModule } from './door3-puzzle-routing.module';

import { Door3PuzzlePage } from './door3-puzzle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Door3PuzzlePageRoutingModule
  ],
  declarations: [Door3PuzzlePage]
})
export class Door3PuzzlePageModule {}
