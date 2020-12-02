import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServiceService } from '../../../core/Service/service.service';
import { Producto } from '../../../Shared/Models/Producto';
import { ServiceCartService } from '../../../core/Service/service-cart.service';
import { element } from 'protractor';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompraProducto } from '../../../Shared/Models/CompraProducto';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  productos: Producto[] = [];
  // unidades: number;
  breakpoint: number;
  filterPost = "";
   unidades= [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
   tamaño : number;

   compraProducto: CompraProducto;
  @Output() productoAniadido = new EventEmitter();

  constructor( 
    private service: ServiceService, 
    private seriveCart: ServiceCartService,
    public snackBar: MatSnackBar) {
   }

  ngOnInit(): void {
    this.cargarListProduct();
    this.breakpoint=3;
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) ;
    }

    return value;
  }

  onResize(event) {
    let tampan = screen.width;
    if (event.target.innerWidth >= tampan*0.75) {
      this.breakpoint=3;
    }if (event.target.innerWidth <= tampan*0.75 && event.target.innerWidth >= tampan*0.4) {
      this.breakpoint=2;
    }if (event.target.innerWidth <= tampan*0.4) {
      this.breakpoint=1;
    }
  }

  cargarListProduct(): void {
    this.service.listProduct().subscribe(data => {
      this.productos = data;
    });
  }


  aumUnidad(id: number) {
    console.log('ProductoComponent.aumUnidad(%s)', this.unidades[id] + 1);
    this.unidades[id]++;
  }

  /**
   * Decrecer unidades del producto
   */
  decUnidad(id: number) {
    console.log('ProductoComponent.decUnidad(%s)', this.unidades[id] - 1);
    if (this.unidades[id] > 1) {
      this.unidades[id]--;
    }
  }

  producto : Producto;
  contador:number=1;
  agregarCarrito(producto: Producto , id: number){
      
    this.contador++;
   
    var nickName = localStorage.getItem('client');
    console.log("El usuario es: "+nickName);

    if (nickName != null) {

      var compro=new CompraProducto((Math.random()),producto.idProduct,1,id,producto.cost*id);
      
      console.log("Se manda a carrito el producto: "+producto.name+" cantidad: "+id);
      this.seriveCart.changeCart(compro);
    }else{
      this.snackBar.open('Debe Iniciar sesion para agregar al carrito  ', '', {duration: 2000, });
    }
  }


  calificar(id:number){
    
  }
}
