import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias/categorias.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { CategoriaComponent } from './categoria/categoria/categoria.component';
import { LandingComponent } from './landing/landing/landing.component';
import { LoginComponent } from './landing/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: "", component: LandingComponent, pathMatch: "full"},
  { path: "login", component: LoginComponent, pathMatch: "full"},
  { path: "categorias", component: CategoriasComponent, canActivate: [AuthGuardService]},
  { path: "categoria", component: CategoriaComponent, canActivate: [AuthGuardService]},
  { path: "**", component: NotFoundComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
