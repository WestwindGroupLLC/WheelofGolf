import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WheelGamesPageRoutingModule } from './wheel-games-routing.module';

import { WheelGamesPage } from './wheel-games.page';
import { WheelSpinnerComponent } from '../wheel-spinner/wheel-spinner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WheelGamesPageRoutingModule
  ],
  declarations: [WheelGamesPage, WheelSpinnerComponent]
})
export class WheelGamesPageModule {}
