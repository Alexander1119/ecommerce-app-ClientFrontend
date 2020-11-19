import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../../Shared/Models/Producto';
import { Cliente } from '../../Shared/Models/Cliente';
import { Tienda } from '../../Shared/Models/Tienda';

import { element } from 'protractor';
import { DatosTienda } from '../../Shared/Models/DatosTienda';



@Injectable({
  providedIn: "root"
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  client = 'http://localhost:8080/ejemplo01/k1/cliente';
  product = 'http://localhost:8080/ejemplo01/k1/producto';
  person = 'http://localhost:8080/ejemplo01/k1/persona';
  store = 'http://localhost:8080/ejemplo01/k1/store';

  // Client

  loginClient( client: Cliente){
    return this.http.post<Cliente>(this.client + '/loginuserClient' , client);
  }

  RegisterClient( client: Cliente){
    return this.http.post<Cliente>(this.client + '/addUserClient' , client);
  }

  dataClientwithNickname(nickname: string){
    return this.http.get<Cliente>(this.person + '/usernick/' + nickname);
  }

  editUser(client:Cliente){
    return this.http.put<Cliente>(this.client+"/editUserClient", client);
  }

  // Product
  addProductToCart( product: Producto){
    return this.http.post<Producto>(this.client + '/addUserClient' , product);
  }

  listProduct(){
    return this.http.get<Producto[]>(this.product+"/productlistcloud");
  }





  tiendas = new Array<Tienda>();


  //Store

  listStore(){
    return this.http.get<Tienda[]>(this.store+"/storelistcloud");
  }
  listStore2() {
    // return this.http.get("D:\Universidad Catolica Boliviana\8vo semestre\Taller de sistenas de informacion\ecommerce-app-frontend\ClienteFrontend\src\app\Shared\Models\DatosTienda.json");
    
    this.tiendas = [];
    let tienda;

    const jsonData = JSON.parse(DatosTienda.tiendas);

    jsonData.forEach( element => {

      tienda = new Tienda(
        element.idStore,
        element.nameStore,
        element.locationStore,
        element.urlImage,
        element.nameImage
      );

      this.tiendas.push(tienda);

    });
    return this.tiendas;
  }


  storeid(id: number){
    return this.http.get<Tienda>(this.store + '/idstore/'+id);

  }
}
