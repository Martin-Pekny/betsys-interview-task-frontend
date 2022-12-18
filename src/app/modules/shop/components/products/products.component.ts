import { Component } from '@angular/core';
import type { OnInit } from '@angular/core';

export interface PeriodicElement {
  image: string;
  name: string;
  quantity: number;
  price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {image: '../', name: 'Placeholder', quantity: 4, price: 137},
  {image: '../', name: 'Placeholder', quantity: 4, price: 312},
  {image: '../', name: 'Placeholder', quantity: 6, price: 599},
  {image: '../', name: 'Placeholder', quantity: 9, price: 548},

];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  displayedColumns: string[] = ['image', 'name', 'quantity', 'price'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
