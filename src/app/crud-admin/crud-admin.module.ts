import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearUserComponent } from './crear-user/crear-user.component';
import { ModificarUserComponent } from './modificar-user/modificar-user.component';
import { EliminarUserComponent } from './eliminar-user/eliminar-user.component';
import { OpcionesCrudComponent } from './opciones-crud/opciones-crud.component';



@NgModule({
  declarations: [
    CrearUserComponent,
    ModificarUserComponent,
    EliminarUserComponent,
    OpcionesCrudComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CrearUserComponent,
    ModificarUserComponent,
    EliminarUserComponent,
    OpcionesCrudComponent
  ]
})
export class CrudAdminModule { }
