import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { InformadorComponent } from './componentes/informador/informador.component';
import { VentaComponent } from './componentes/venta/venta.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ProductoComponent,
    BotonComponent,
    ListaComponent,
    BuscadorComponent,
    InformadorComponent,
    VentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
