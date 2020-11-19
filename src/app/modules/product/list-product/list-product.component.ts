import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../../../core/Service/service.service';
import { Producto } from '../../../Shared/Models/Producto';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  productos: Producto[] = [];
  unidades: number;
  breakpoint: number;
  filterPost="";
  constructor( private service: ServiceService, ) {
    this.unidades = 1;

   }

  ngOnInit(): void {
    this.cargarListProduct();
    this.breakpoint=3;
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


  aumUnidad() {
    console.log('ProductoComponent.aumUnidad(%s)', this.unidades + 1);
    this.unidades++;
  }

  /**
   * Decrecer unidades del producto
   */
  decUnidad() {
    console.log('ProductoComponent.decUnidad(%s)', this.unidades - 1);
    if (this.unidades > 1) {
      this.unidades--;
    }
  }


  agregarCarrito(id:number){
    console.log("El iod del proiducto seleccionado es: "+id);
    
  }
}
