import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Producto, Tipo } from '../../clases/producto';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent implements OnInit {
  @Output() altaProducto: EventEmitter<any>= new EventEmitter<any>();
  producto:Producto;

  constructor() { }

  ngOnInit(): void {
  }

  setTipo(tipo:string)
  {
    if(tipo === 'liquido')
    {
      this.producto.tipo = Tipo.liquido;
    }
    else if(tipo === 'solido')
    {
      this.producto.tipo = Tipo.solido;
    }
    else
    {
      this.producto.tipo = Tipo.vacio;
    }
  }

  nuevoProducto()
  {
    //console.info("Nuevo Producto");
    this.producto= new Producto(0, '' , 'vacio', new Date(0), 0, '');
  }

  crearProducto()
  {
    //console.info("Crear Producto");
    console.info(this.producto);
    this.altaProducto.emit(this.producto);
    this.producto=null;
  }
}
