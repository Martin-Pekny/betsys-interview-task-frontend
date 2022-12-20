import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
 
import { selectProductsCart, selectProducts } from './modules/shop/state/products.selectors';
import { ProductsActions, ProductsApiActions } from './modules/shop/state/products-list.actions';
import { ProductsService } from './modules/shop/services/products/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'betsys';

  constructor(private productsService: ProductsService, private store: Store) {}

  ngOnInit() {
    console.log("RANNN")
    this.productsService
      .getAllProducts()
      .subscribe((products) =>
        this.store.dispatch(ProductsApiActions.retrievedProductsList({ products }))
      );
  }

}
