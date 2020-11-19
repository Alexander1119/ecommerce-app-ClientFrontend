import { Component, OnInit, Input } from '@angular/core';
import { Tienda } from '../../../Shared/Models/Tienda';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../../core/Service/service.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  tienda: Tienda;
  constructor(
    private service: ServiceService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
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
}
