// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// state management
// import { productsReducer } from './state/products-list.reducer';
// import { cartReducer } from './state/cart.reducer';
// import { StoreModule } from '@ngrx/store';
// components
import { HeaderComponent } from './components/header/header.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ShopComponent } from './components/shop/shop.component';
// routing 
import { shopRoutes } from './shop.routes';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(shopRoutes),
    // StoreModule.forRoot({ products: productsReducer, cart: cartReducer }),
    HttpClientModule,
  ],
  declarations: [
    HeaderComponent,
    ProductsListComponent,
    ShopComponent,
  ],
  providers: [],
  exports: []
 })

 export class ShopModule {}