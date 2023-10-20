import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Door2PuzzlePageRoutingModule } from './door2-puzzle-routing.module';

import { Door2PuzzlePage } from './door2-puzzle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Door2PuzzlePageRoutingModule
  ],
  declarations: [Door2PuzzlePage]
})
export class Door2PuzzlePageModule {}
