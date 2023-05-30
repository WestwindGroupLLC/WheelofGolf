import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { AccountPageModule } from './account/account.module';
import { WheelGamesPageModule } from './wheel-games/wheel-games.module';
import { LoginPageModule } from './Login/login.module';
import { WelcomePageModule } from './welcome/welcome.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, SignupComponent, HomeComponent],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    FormsModule,
    AppRoutingModule, 
    WelcomePageModule, 
    LoginPageModule, 
    WheelGamesPageModule, 
    AccountPageModule,
    RouterModule.forChild([{ path: 'home', component: HomeComponent}])],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}