import { createReducer, on } from '@ngrx/store';
import { ProductsActions } from './products-list.actions';
 
export const initialState: ReadonlyArray<string> = [];
 
export const cartReducer = createReducer(
  initialState,
  on(ProductsActions.removeProduct, (state, { productId }) =>
    // TODO: remove condition
    state.filter((id) => id !== productId)
  ),
  on(ProductsActions.addProduct, (state, { productId }) => {
    if (state.indexOf(productId) > -1) return state;
 
    return [...state, productId];
  })
);