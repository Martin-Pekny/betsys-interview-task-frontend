// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router'
// components
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ShopComponent } from './shop/shop.component';
// routing 
import { shopRoutes } from './shop/shop.routes'

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(shopRoutes)
  ],
  declarations: [
    HeaderComponent,
    ProductsComponent,
    ShopComponent
  ],
  providers: [],
  exports: []
 })

 export class ShopModule {}