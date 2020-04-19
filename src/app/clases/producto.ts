
export class Producto {
  id:number;
  descripcion:string;
  tipo:Tipo;
  fechaVencimiento:Date;
  precio:number;
  rutaDeFoto:String;

    public constructor(id:number,descripcion:string,tipo:string, fechaVencimiento:Date, precio:number, rutaDeFoto:String)
    {
        this.id=id;
        this.descripcion=descripcion;
        this.tipo=Tipo[tipo];
        this.fechaVencimiento=fechaVencimiento;
        this.precio=precio;
        this.rutaDeFoto=rutaDeFoto;
    }
}

export enum Tipo{
  vacio = 'vacio',
  solido = 'solido',
  liquido = 'liquido'
}
