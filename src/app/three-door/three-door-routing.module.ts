import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThreeDoorPage } from './three-door.page';

const routes: Routes = [
  {
    path: '',
    component: ThreeDoorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThreeDoorPageRoutingModule {}
