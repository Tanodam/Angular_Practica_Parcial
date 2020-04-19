import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Producto } from '../../clases/producto';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {
  @Input() productoSeleccionado:Producto;
  @Output() productoSeleccionadoParaBaja: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  
  bajaProducto()
  {
    console.info("Se elimina: " + this.productoSeleccionado.id);
    this.productoSeleccionadoParaBaja.emit(this.productoSeleccionado);
  }
}
