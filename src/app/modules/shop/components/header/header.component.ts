import { Component } from '@angular/core';
import type { OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {}

  cart = []
  numOfItems = 0

  ngOnInit(): void {
  }

}