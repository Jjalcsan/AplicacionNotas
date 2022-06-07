import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasComponent } from './categorias/categorias.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CategoriasComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CategoriasComponent
  ]
})
export class CategoriasModule { }
