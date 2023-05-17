import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WheelGamesPageRoutingModule } from './wheel-games-routing.module';

import { WheelGamesPage } from './wheel-games.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WheelGamesPageRoutingModule
  ],
  declarations: [WheelGamesPage]
})
export class WheelGamesPageModule {}
