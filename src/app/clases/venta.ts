import { Producto } from './producto'

export class Venta extends Producto
{
    fechaDeVenta: Date;
    cantidad: number;

    public constructor(id:number,descripcion:string,tipo:string, fechaVencimiento:Date, 
                        precio:number, rutaDeFoto:String, fechaDeVenta: Date, cantidad: number)
    {
        super(id,descripcion,tipo, fechaVencimiento, precio, rutaDeFoto);
        this.fechaDeVenta=fechaDeVenta;
        this.cantidad=cantidad;
    }
}