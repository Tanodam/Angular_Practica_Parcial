import { Component, OnInit } from '@angular/core';
import { Producto, Tipo } from '../../clases/producto'
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  productos:Producto[] = [];
  producto: Producto;
  arrayObjetos: any[];
  tipo:string;

  constructor() {
    localStorage.setItem("productos",JSON.stringify(this.productos));
  }

  ngOnInit(): void {
  }

  alta(producto:Producto)
  {
    console.info("Tipo:" + producto.tipo);

    this.producto = new Producto(producto.id,producto.descripcion, Tipo[producto.tipo], producto.fechaVencimiento,
                                  producto.precio, producto.rutaDeFoto);
    //console.info("Alta: " + this.producto + typeof this.producto);

    this.productos = JSON.parse(localStorage.getItem("productos"));
    this.productos.push(this.producto);
    localStorage.setItem("productos",JSON.stringify(this.productos));
    this.producto = null;
  }

  baja(producto:Producto)
  {
    let productosJSON = [];
    this.productos = [];
    let id = producto.id;
    console.info("Baja:" + this.producto);
    
    productosJSON = JSON.parse(localStorage.getItem("productos"));
    productosJSON.forEach(element => this.productos.push(element));
    let index = this.productos.findIndex((item) => item.id === id);
    //console.info("El  su index es" + index);
    
    this.productos.splice(index,1);
    localStorage.setItem("productos",JSON.stringify(this.productos));

    
  }

  seleccionar(producto:Producto)
  {
    this.producto = producto;
  }
}
