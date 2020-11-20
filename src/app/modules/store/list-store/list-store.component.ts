import { Component, OnInit } from '@angular/core';
import { Tienda } from '../../../Shared/Models/Tienda';
import { ServiceService } from '../../../core/Service/service.service';


@Component({
  selector: 'app-list-store',
  templateUrl: './list-store.component.html',
  styleUrls: ['./list-store.component.css']
})
export class ListStoreComponent implements OnInit {
  filterPost='';
  tiendas: Tienda[] = [];
  breakpoint: number;
  proporsion:string;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.cargarListStore();
     this.breakpoint=3;

    //  this.updateListStore();
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
    // this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 3;
    // console.log(this.breakpoint);
    // console.log("Tamaño pantalla "+event.target.innerWidth);

  }

  cargarListStore(): void {
    this.service.listStore().subscribe(data => {
      this.tiendas = data;
    });
  }




}
