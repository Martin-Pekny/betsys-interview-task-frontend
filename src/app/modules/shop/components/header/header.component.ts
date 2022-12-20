import { Component, EventEmitter, Input, Output } from '@angular/core';
// model
import { Product } from '../../models/product.model' 


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() products: ReadonlyArray<Product> = [];
  @Output() remove = new EventEmitter<string>();

  constructor() {}

  cart = []
  numOfItems = 0
}
