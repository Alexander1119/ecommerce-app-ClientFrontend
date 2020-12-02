import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../../Shared/Models/Producto';
import { Cliente } from '../../Shared/Models/Cliente';
import { Tienda } from '../../Shared/Models/Tienda';
import { element } from 'protractor';
import { Compra } from '../../Shared/Models/Compra';



@Injectable({
  providedIn: "root"
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  client = 'http://localhost:8080/ejemplo01/k1/cliente';
  product = 'http://localhost:8080/ejemplo01/k1/producto';
  person = 'http://localhost:8080/ejemplo01/k1/persona';
  store = 'http://localhost:8080/ejemplo01/k1/store';
  compra = 'http://localhost:8080/ejemplo01/k1/compra/producto'
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
    return this.http.get<Producto[]>(this.product+"/productlist");
  }

  idProduct(id:number){
    return this.http.get<Producto>(this.product+"/idproducto/"+id);
  }





  //Store

  listStore(){
    return this.http.get<Tienda[]>(this.store+"/storelist");
  }


  storeid(id: number){
    return this.http.get<Tienda>(this.store + '/idstore/'+id);

  }

  listProductOfStore(id:number){
    return this.http.get<Producto[]>(this.product+'/productlist/'+id);
  }





  //Compra
  CompraProductos(compra: Compra, tipoCompra: number, idUser: number){
    return this.http.put<number>(this.compra+"/addCompraCloud/"+tipoCompra+"/"+idUser,compra);

  }
}
