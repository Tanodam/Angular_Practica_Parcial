import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './componentes/admin/admin.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { InformadorComponent } from './componentes/informador/informador.component';

const routes: Routes = [
  {path: '', component: AdminComponent},
  {path: 'productos', component: InformadorComponent},
  {path: 'busqueda', component: BuscadorComponent},
  {path: 'productos/alta', component: ProductoComponent},
  //{path: 'ventas/nueva', component: AdminComponent},
  //{path: 'ventas/listado', component: AdminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
