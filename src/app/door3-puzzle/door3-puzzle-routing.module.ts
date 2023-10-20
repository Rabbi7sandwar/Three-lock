import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Door3PuzzlePage } from './door3-puzzle.page';

const routes: Routes = [
  {
    path: '',
    component: Door3PuzzlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Door3PuzzlePageRoutingModule {}
