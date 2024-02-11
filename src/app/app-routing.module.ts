import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BaseAuthComponent} from "./presentation/layout/base-auth/base-auth.component";
import {loggedOutGuard} from "./core/guards/logged-out.guard";
import {BaseLoggedComponent} from "./presentation/layout/base-logged/base-logged.component";
import {loggedInGuard} from "./core/guards/logged-in.guard";

const routes: Routes = [
  {
    path: 'auth',
    component: BaseAuthComponent,
    canActivate: [loggedOutGuard],
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./presentation/features/login/login.module').then(
            (m) => m.LoginModule
          )
      }
    ]
  },
  {
    path: 'home',
    component: BaseLoggedComponent,
    canActivate: [loggedInGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./presentation/features/products/products.module').then(
            (m) => m.ProductsModule
          )
      },
    ]
  },
  {
    path: 'favourites',
    component: BaseLoggedComponent,
    canActivate: [loggedInGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./presentation/features/favourites/favourites.module').then(
            (m) => m.FavouritesModule
          )
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
