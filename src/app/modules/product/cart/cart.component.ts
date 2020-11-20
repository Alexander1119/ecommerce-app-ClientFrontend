import { Component, OnInit,Input } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { Producto } from '../../../Shared/Models/Producto';
import { ServiceService } from '../../../core/Service/service.service';
import { ProductoCarrito } from '../../../Shared/Models/Pedido';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  // ProductosCarrito: Producto[]=[];
  // ProductoCarrito: Producto;
  @Input('productoAniadido') productoAniadido: ProductoCarrito;
  listaCompra: ProductoCarrito[];

   constructor(private service: ServiceService) {
     console.log('CarritoComponent.constructor(%o)', this.productoAniadido);
    }

  ngOnInit(): void {
    this.carrito();
  }

  carrito(){
    console.log(this.productoAniadido.producto.name);
    this.listaCompra.push(this.productoAniadido);

    // console.log("El id del producto en el carrito es :"+localStorage.getItem("CarritoProducto"));
    // var arrayId=localStorage.getItem("CarritoProductos");

    // console.log(arrayId);
    // arrayId = JSON.parse(arrayId);

    // this.service.idProduct(idnumber).subscribe(
    //   data => {
    //     // producto = data;
    //     // console.log(this.ProductoCarrito.name);
    //     this.ProductosCarrito.push(data);
    //   }
    // );
    // //this.ProductosCarrito.push(this.ProductoCarrito);
    // console.log(this.ProductosCarrito);
  }
}
