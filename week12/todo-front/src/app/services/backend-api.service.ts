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
    return this.get(API_URL + 'task_list/', {});
  }
  createTodo(post: Todo) {
    return this.post(API_URL + 'task_list/', post);
  }

}
