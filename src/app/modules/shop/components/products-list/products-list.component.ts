import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { OnInit } from '@angular/core';
// model
import { Product } from '../../models/product.model'

const ELEMENT_DATA: Product[] = [
  {id: '4', name: 'Placeholder', price: 312, image: '../',},
  {id: '5', name: 'Placeholder', price: 312, image: '../'},
  {id: '1', name: 'Placeholder', price: 312, image: '../'},
  {id: '8', name: 'Placeholder', price: 312, image: '../'},

];

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  @Input() products: ReadonlyArray<Product> = [];
  @Output() add = new EventEmitter<string>();

  displayedColumns: string[] = ['id', 'name', 'price', 'image'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<Product>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
