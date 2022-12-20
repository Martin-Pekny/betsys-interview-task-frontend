import { Injectable } from '@angular/core';
// eslint-disable-next-line
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// model
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Array<Product>> {
    return this.http.get<{ items: Product[] }>(
        'http://localhost:8080/products'
      )
      .pipe(map((products) => products.items || []));
      }
}
