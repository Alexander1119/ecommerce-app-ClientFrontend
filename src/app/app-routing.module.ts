import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/authentication/login/login.component';
import { SigninComponent } from './core/authentication/signin/signin.component';
import { HomeComponent } from './modules/home/home.component';
import { ListProductComponent } from './modules/product/list-product/list-product.component';
import { ListStoreComponent } from './modules/store/list-store/list-store.component';
import { CartComponent } from './modules/product/cart/cart.component';
import { StoreComponent } from './modules/store/store/store.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'home', component: HomeComponent},
  {path: 'listProduct', component: ListProductComponent},
  {path: 'listStore', component: ListStoreComponent},
  {path: 'cart', component: CartComponent},
  {path: 'store', component: StoreComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
