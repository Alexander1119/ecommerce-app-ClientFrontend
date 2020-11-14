import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../../Shared/Models/Producto';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {



  @Input('producto') producto: Producto;
  unidades: number;
  constructor() {
    this.unidades = 1;
   }

  ngOnInit(): void {
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

}
