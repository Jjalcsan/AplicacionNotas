import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from './categoria/categoria.component';



@NgModule({
  declarations: [
    CategoriaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CategoriaComponent
  ]
})
export class CategoriaModule { }
