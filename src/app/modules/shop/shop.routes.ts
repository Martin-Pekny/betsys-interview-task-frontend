// cant enforce "import type" / breaks functionality
// eslint-disable-next-line 
import { Route } from '@angular/router'
// components //
import { ShopComponent } from './components/shop/shop.component'


export const shopRoutes: Route[] = [
  { path: '', component: ShopComponent },
]
