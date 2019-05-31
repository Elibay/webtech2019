import { Component, OnInit } from '@angular/core';
import {BackendApiService} from '../services/backend-api.service';
import {Product, UserProduct} from '../models/models';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public products: Product[] = [];
  public toAdd: Array<number> = [];
  public userProducts: UserProduct[] = [];
  public totalPrice: number = 0;
  constructor(private apiService: BackendApiService) {}
  ngOnInit() {
    this.apiService.getProducts('').then(res => {
      this.products = res;
      this.products.forEach( element => {
        this.toAdd.push(0);
      });
    });
    this.apiService.getUserProducts().then(res => {
      this.userProducts = res;
      this.userProducts.forEach(element => {
        this.totalPrice += element.product.price * element.count;
      });
    });
  }
  delete(userProduct: UserProduct) {
    this.apiService.deleteUserProduct(userProduct.id);
    window.location.reload();
  }
  search(name) {
    this.apiService.getProducts(name).then( res => {
      this.products = res;
    });
  }
  addToBasked(i) {
    this.apiService.addUserProduct(this.toAdd[i], this.products[i]).then(res => {
      this.products[i].quantity -= this.toAdd[i];
      this.toAdd[i] = 0;
    });
  }


  logout() {
    this.apiService.logout().then(res => {
      localStorage.clear();
      window.location.reload();
    });
  }

}
