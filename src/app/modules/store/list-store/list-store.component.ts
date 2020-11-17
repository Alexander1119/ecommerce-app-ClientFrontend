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
    this.tiendas = this.service.listStore();
    console.log('Lista de tienda: %o', this.tiendas);
  }

  search:string;
  // receiveMessage() {
  //    this.search = localStorage.getItem("search");
  //   console.log("en store lo que se va a buscar es: "+this.search);
    
  // }

  listStoreToSearch: Tienda[] = [];

  updateListStore(){
    
     this.tiendas.forEach(element => {
       if (this.search!=undefined) {
        if (element.nameStore==this.search) {
          this.listStoreToSearch.push(element);
          this.tiendas=this.listStoreToSearch;
        }
       }else{
        this.tiendas = this.service.listStore();
       }
     });
      
  }
}
