import { Producto } from './Producto';
export class Pedido{

    idProduct: number;
    name: string;
    description: string;
    cost: number;
    code: number;
    quantity: number;
    type: string;
    quantityOrder: number;

    constructor(producto: Producto, quantityOrder: number){
        this.idProduct = producto.idProduct;
        this.name = producto.name;
        this.description = producto.description;
        this.cost = producto.cost;
        this.code = producto.code;
        this.quantity = producto.quantity;
        this.type = producto.type;
        this.quantityOrder = quantityOrder;
    }
}

