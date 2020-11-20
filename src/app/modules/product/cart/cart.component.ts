import { Component, OnInit,Input } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { Producto } from '../../../Shared/Models/Producto';
import { ServiceService } from '../../../core/Service/service.service';
import { ProductoCarrito } from '../../../Shared/Models/Pedido';
import { Observable } from 'rxjs';
import { ServiceCartService } from '../../../core/Service/service-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  // ProductosCarrito: Producto[]=[];
  // ProductoCarrito: Producto;

  public productos: Array<Producto>;

  listaCompra: ProductoCarrito[];

   constructor(
     private service: ServiceService,
     private serviceCart: ServiceCartService) {
    }

  ngOnInit(): void {
    // this.carrito();

    this.serviceCart.currentDataCart$.subscribe(
      data =>
      {
        this.productos = data;
      }
    );





  }

  carrito(){
  
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
