import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../core/Service/service.service';
import { Producto } from '../../../Shared/Models/Producto';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  productos: Producto[] = [];

  constructor( private service: ServiceService) { }

  ngOnInit(): void {
    this.cargarListProduct();
  }

  cargarListProduct(): void {
    this.service.listProduct().subscribe(data => {
      this.productos = data;
    });
  }

}
