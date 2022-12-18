import { Injectable } from '@angular/core';
// eslint-disable-next-line
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get('http://localhost:4000/products');
  }
}
