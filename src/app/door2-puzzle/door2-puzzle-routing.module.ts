import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Door2PuzzlePage } from './door2-puzzle.page';

const routes: Routes = [
  {
    path: '',
    component: Door2PuzzlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Door2PuzzlePageRoutingModule {}
