// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
// effects 
import { ShopEffects } from './store/effects';
// components
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { ShopComponent } from './components/shop/shop.component';
// routing 
import { shopRoutes } from './shop.routes'

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(shopRoutes),
    EffectsModule.forRoot([ShopEffects])
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