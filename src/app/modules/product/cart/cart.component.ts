import { Component, OnInit,Input } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { Producto } from '../../../Shared/Models/Producto';
import { ServiceService } from '../../../core/Service/service.service';
import { ProductoCarrito } from '../../../Shared/Models/Pedido';
import { Observable } from 'rxjs';
import { ServiceCartService } from '../../../core/Service/service-cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompraProducto } from '../../../Shared/Models/CompraProducto';
import { element } from 'protractor';
import { Compra } from '../../../Shared/Models/Compra';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  // ProductosCarrito: Producto[]=[];
  // ProductoCarrito: Producto;

  public productos: Array<CompraProducto>;
  favoriteSeason: string;
  seasons: string[] = ['Compra', 'Pedido'];
  listaCompra: ProductoCarrito[];
  display = false;

   constructor(
     private service: ServiceService,
     private serviceCart: ServiceCartService,
     public snackBar: MatSnackBar) {
    }

  ngOnInit(): void {

    var nickName = localStorage.getItem('client');
    if (nickName != null) {
      this.serviceCart.currentDataCart$.subscribe(
        data =>
        {
          this.productos = data;
          if(data.length==0){
            this.display=false;
          }else{
            this.display=true;

          }
          
        }
      );


    }else{
      this.snackBar.open('No tiene productos Agregados al carrito ' , '', {duration: 2000, });
    }
  }

  totalcarrito : number;
  metodoPago(){
    var idClient=parseInt(localStorage.getItem('idClient')); 
    console.log(idClient);
    
    var idCompra=Math.random()*100;
    console.log(idCompra);
    
    var total=0;
    this.productos.forEach(element=>
      total=total+element.precio);
      console.log(total);

      this.totalcarrito=total;
    var status=1;

    var compra=new Compra(idCompra,idClient,"user",total,1,this.productos);


      if (this.favoriteSeason=='Compra') {
        this.service.CompraProductos(compra,2,1).subscribe( data =>{
            console.log(data);
            
        }
        );
        this.snackBar.open('Compra realizada ' , '', {duration: 2000, });

      }if (this.favoriteSeason=='Pedido') {
        this.service.CompraProductos(compra,1,1).subscribe( data =>{
            console.log(data);
        });
        this.snackBar.open('Pedido guardado \n Con un total de: '+total , '', {duration: 2000, });

      }
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

  onNavigate(){
    window.location.href="https://iotproyect-a695c.web.app/?preciototal=100";

  }

  paypal(){
    var total=0;
    this.productos.forEach(element=>
      total=total+element.precio);
    window.location.href="https://iotproyect-a695c.web.app/?preciototal="+total;

    this.productos=null;
  }
}
