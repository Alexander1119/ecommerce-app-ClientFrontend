export class CompraProducto{
    idCompra: number;
    id_producto: number;
    estado: number;
    quantity: number;
    precio: number;


    constructor(
        idCompra:number,
        id_producto: number,
        estado: 1,
        quantity: number,
        precio: number){

            this.idCompra = idCompra;
            this.id_producto = id_producto;
            this.estado = estado;
            this.quantity = quantity;
            this.precio = precio;
    }
}