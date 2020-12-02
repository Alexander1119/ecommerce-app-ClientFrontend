import { CompraProducto } from './CompraProducto';


export class Compra{
    idCompra: number;
    idUser_client: number;
    tx_seller: string;
    total: number;
    status: number;
    compraProductoList:Array<CompraProducto>;


    constructor(
        idCompra:number,
        idUser_client: number,
        tx_seller: 'user',
        total: number,
        status: number,
        compraProductoList:Array<CompraProducto>){

            this.idCompra = idCompra;
            this.idUser_client = idUser_client;
            this.tx_seller = tx_seller;
            this.total = total;
            this.status = status;
            this.compraProductoList = compraProductoList;
    }
}

