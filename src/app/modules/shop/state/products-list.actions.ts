import { createActionGroup, props } from '@ngrx/store';
import { Product } from '../models/product.model';

export const ProductsActions = createActionGroup({
    source: 'Products',
    events: {
      'Add Product': props<{ productId: string }>(),
      'Remove Product': props<{ productId: string }>(),
    },
  });
   
  export const ProductsApiActions = createActionGroup({
    source: 'Products API',
    events: {
      'Retrieved Products List': props<{ products: ReadonlyArray<Product> }>(),
    },
  });