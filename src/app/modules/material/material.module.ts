import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';


const materialComponents = [
  MatButtonModule,
  MatMenuModule
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