import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    TopBarComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    TopBarComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
