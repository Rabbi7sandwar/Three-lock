import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'three-door',
    loadChildren: () => import('./three-door/three-door.module').then( m => m.ThreeDoorPageModule)
  },
  {
    path: 'memory-game',
    loadChildren: () => import('./memory-game/memory-game.module').then( m => m.MemoryGamePageModule)
  },
  {
    path: 'door1-puzzle',
    loadChildren: () => import('./door1-puzzle/door1-puzzle.module').then( m => m.Door1PuzzlePageModule)
  },
  {
    path: 'door2-puzzle',
    loadChildren: () => import('./door2-puzzle/door2-puzzle.module').then( m => m.Door2PuzzlePageModule)
  },
  {
    path: 'door3-puzzle',
    loadChildren: () => import('./door3-puzzle/door3-puzzle.module').then( m => m.Door3PuzzlePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
