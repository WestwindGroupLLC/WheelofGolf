import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'welcome',
        loadChildren: () => import('../welcome/welcome.module').then(m => m.WelcomePageModule)
      },
      {
        path: 'Wheel Games',
        loadChildren: () => import('../wheel-games/wheel-games.module').then(m => m.WheelGamesPageModule)
      },
      {
        path: 'Login',
        loadChildren: () => import('../Login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'Account',
        loadChildren: () => import('../account/account.module').then(m => m.AccountPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/welcome',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
