import {NgModule} from '@angular/core';
// eslint-disable-next-line
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'shop',
    loadChildren: () => import('./modules/shop/shop.module').then((m) => m.ShopModule),
  }, 
  { path: '', redirectTo: 'shop', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
