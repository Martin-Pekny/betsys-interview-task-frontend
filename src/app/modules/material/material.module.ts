import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';


const materialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatTableModule
]

@NgModule({
  imports: [
    materialComponents,
  ],
  exports: [
    materialComponents
  ]
})
export class MaterialModule {}