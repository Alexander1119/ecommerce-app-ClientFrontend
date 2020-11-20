import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tienda } from '../../../Shared/Models/Tienda';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../../core/Service/service.service';
import { Producto } from '../../../Shared/Models/Producto';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  tienda: Tienda;
  productos: Producto[]=[];
  unidades:number;
  filterPost="";
  breakpoint: number;
  @Output() productoAniadido = new EventEmitter();

  constructor(
    private service: ServiceService,
    private activatedRoute: ActivatedRoute
  ) {
    this.unidades=1;
   }

  ngOnInit(): void {
    this.breakpoint=3;
    this.cargarTienda();
    this.cargarProductosDeLaTienda();
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


  aumUnidad() {
    console.log('ProductoComponent.aumUnidad(%s)', this.unidades + 1);
    this.unidades++;
  }
  decUnidad() {
    console.log('ProductoComponent.decUnidad(%s)', this.unidades - 1);
    if (this.unidades > 1) {
      this.unidades--;
    }
  }
  cargarTienda(){
    const id = this.activatedRoute.snapshot.params.id;
    this.service.storeid(id).subscribe(
      data => {
        this.tienda = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  cargarProductosDeLaTienda(){
    const id = this.activatedRoute.snapshot.params.id;

    this.service.listProductOfStore(id).subscribe(
      data =>{
        this.productos=data;
      }
    );

  }
 
  
}
