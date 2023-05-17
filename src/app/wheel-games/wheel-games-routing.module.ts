import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WheelGamesPage } from './wheel-games.page';

const routes: Routes = [
  {
    path: '',
    component: WheelGamesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WheelGamesPageRoutingModule {}
