import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component'; //temporarily bypassing sign up

import { WheelGamesPage } from './wheel-games/wheel-games.page';

const routes: Routes = [
  // Other existing routes
  { path: 'signup', component: SignupComponent},
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Login/login.module').then( m => m.LoginPageModule)
  },
  {
    //put back in the loadchildren page
    path: 'wheel-games',
    component: WheelGamesPage
    //loadChildren: () => import('./wheel-games/wheel-games.module').then( m => m.WheelGamesPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
