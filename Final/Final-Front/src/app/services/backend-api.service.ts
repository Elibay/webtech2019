import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Main } from './main.service';
import {Product, UserProduct} from '../models/models';
const API_URL = 'http://localhost:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService extends Main {

  constructor(http: HttpClient) {
    super(http);
  }
  getProducts(search: string): Promise<[Product]> {
    return this.get(API_URL + 'products/?search=' + search, {});
  }
  addUserProduct(count: number, product: Product): Promise<Product> {
    console.log(product.id);
    return this.post(API_URL + 'user_products/', {'count': count, 'product': product.id});
  }
  getUserProducts(): Promise<[UserProduct]> {
    return this.get(API_URL + 'user_products/', {});
  }
  deleteUserProduct(id: number) {
    return this.delete(API_URL + 'user_products/' + id + '/', {});
  }

  logout(): Promise<any> {
    return this.post('http://localhost:8000/api/logout/', {
    });
  }

}
