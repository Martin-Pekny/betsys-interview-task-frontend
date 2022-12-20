import { createReducer, on } from '@ngrx/store';

import { ProductsApiActions } from './products-list.actions';
import { Product } from '../models/product.model';

export const initialState: ReadonlyArray<Product> = [];

export const productsReducer = createReducer(
  initialState,
  on(ProductsApiActions.retrievedProductsList, (_state, { products }) => products)
);