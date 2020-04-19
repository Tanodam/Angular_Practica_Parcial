import { Component, OnInit, Input } from '@angular/core';
import { Venta } from 'src/app/clases/venta';
import { Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  venta: Venta;
  @Input() productoVenta: Producto;
  @Output() altaVenta: EventEmitter<any>= new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    if(this.productoVenta)
    {
      this.venta= new Venta(this.productoVenta.id, this.productoVenta.descripcion 
                            ,this.productoVenta.tipo, this.productoVenta.fechaVencimiento, this.productoVenta.precio,
                            this.productoVenta.rutaDeFoto,new Date(0),0);
    }
    else
    {
      this.venta= new Venta(0, '' , 'vacio', new Date(0), 0, '',new Date(0),0);
    }
  }

  crearVenta()
  {
    console.info(this.venta);
    this.altaVenta.emit(this.venta);
    this.venta=null;
  }

}
