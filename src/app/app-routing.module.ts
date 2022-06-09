import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias/categorias.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { CategoriaComponent } from './categoria/categoria/categoria.component';
import { LandingComponent } from './landing/landing/landing.component';
import { LoginComponent } from './landing/login/login.component';

const routes: Routes = [
  { path: "", component: LandingComponent, pathMatch: "full"},
  { path: "login", component: LoginComponent, pathMatch: "full"},
  { path: "categorias", component: CategoriasComponent, pathMatch: "full"},
  { path: "categoria", component: CategoriaComponent, pathMatch: "full"},
  { path: "**", component: NotFoundComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
