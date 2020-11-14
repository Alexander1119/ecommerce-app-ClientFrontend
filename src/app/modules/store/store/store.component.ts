import { Component, OnInit, Input } from '@angular/core';
import { Tienda } from '../../../Shared/Models/Tienda';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  @Input('tienda') tienda: Tienda;

  constructor() { }

  ngOnInit(): void {
  }

}
