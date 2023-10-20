import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Door1PuzzlePage } from './door1-puzzle.page';

const routes: Routes = [
  {
    path: '',
    component: Door1PuzzlePage
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Door1PuzzlePageRoutingModule {}
