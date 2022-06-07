import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { CategoriasComponent } from './categorias/categorias/categorias.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { CategoriaComponent } from './categoria/categoria/categoria.component';

const routes: Routes = [
  { path: "", component: LoginComponent, pathMatch: "full"},
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
