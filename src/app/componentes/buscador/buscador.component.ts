import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  @Output() productoEncontrado: EventEmitter<any>= new EventEmitter<any>();
  producto: Producto;
  descripcion: String;

  constructor() { }

  ngOnInit(): void {
  }

  buscar()
  {
    console.info(this.descripcion);
    let descripcion = this.descripcion;
    let productosJSON = [];
    let productos: Producto[] = [];
    
    productosJSON = JSON.parse(localStorage.getItem("productos"));
    productosJSON.forEach(element => productos.push(element));
    this.productoEncontrado.emit(productos.find((item) => item.descripcion === descripcion));
  }

}
