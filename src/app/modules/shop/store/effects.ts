import { Injectable } from '@angular/core';
// eslint-disable-next-line
import { Actions, Effect, ofType } from '@ngrx/effects'
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionTypes } from './actions';
// eslint-disable-next-line
import { ProductsService } from '../services/products/products.service';

@Injectable()
export class ShopEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
  
  @Effect()
  loadFruits$ = this.actions$.pipe(
    ofType(ActionTypes.LoadItems),
    mergeMap(() =>
      this.productsService.getAllProducts().pipe(
        map(products => {
          return { type: ActionTypes.LoadSuccess, payload: products };
        }),
        catchError(() => EMPTY)
      )
    )
  );
}