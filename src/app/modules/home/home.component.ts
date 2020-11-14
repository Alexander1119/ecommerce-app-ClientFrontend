import { Component, OnInit , Input} from '@angular/core';
import { ServiceService } from '../../core/Service/service.service';
import { Producto } from '../../Shared/Models/Producto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() product: Producto;

  detailViewActive: boolean;

  constructor(private service: ServiceService) {

  }

  ngOnInit() {
    this.detailViewActive = false;
  }

  onProductClick() {
    this.detailViewActive = !this.detailViewActive;
  }

  onAddToCart() {
    this.service.addProductToCart(this.product);
  }


}
