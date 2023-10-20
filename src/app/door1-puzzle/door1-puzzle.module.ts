import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Door1PuzzlePageRoutingModule } from './door1-puzzle-routing.module';

import { Door1PuzzlePage } from './door1-puzzle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Door1PuzzlePageRoutingModule
  ],
  declarations: [Door1PuzzlePage]
})
export class Door1PuzzlePageModule {}
