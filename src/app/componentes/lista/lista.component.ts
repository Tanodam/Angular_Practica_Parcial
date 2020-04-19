import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { Producto } from '../../clases/producto';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() listadoProductos: Producto[] ;
  @Output() productoSeleccionado: EventEmitter<any>= new EventEmitter<any>();
  product:Producto;
  seleccionado: Boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(producto:Producto)
  { 
    this.product = producto;
    //console.info("Se selecciono de la lista el ID: " + producto.id);
    this.productoSeleccionado.emit(producto);
  }
}
