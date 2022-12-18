import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// eager loaded components 
import { AppComponent } from './app.component';

// modules 
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { ShopModule } from './modules/shop/shop.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ShopModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
