import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Main } from './main.service';
import {Todo} from '../models/models';
const API_URL = 'http://localhost:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService extends Main {

  constructor(http: HttpClient) {
    super(http);
  }
  getTodos(): Promise<[Todo]> {
    return this.get(API_URL + 'contacts/', {});
  }
  createTodo(post: Todo) {
    return this.post(API_URL + 'contacts/', post);
  }
  deleteContact(post: Todo) {
    return this.delete(API_URL + 'contacts/' + post.id + '/', post);
  }
  editContact(post: Todo) {
    return this.put(API_URL + 'contacts/' + post.id + '/', post);
  }
  logout(): Promise<any> {
    return this.post('http://localhost:8000/api/logout/', {
    });
  }

}
