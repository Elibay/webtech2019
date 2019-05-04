import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Main } from './main.service';
import { Post, IAuthResponse } from '../models';
const API_URL = 'http://localhost:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService extends Main {

  constructor(http: HttpClient) {
    super(http);
  }

  public getPostList(): Promise<[Post]> {
    return this.get(API_URL + "posts/", {});
  }
  public createPost(post: Post) {
    return this.post(API_URL + "posts/", post);
  }
  public getDetailPost(post: Post) {
    return this.get(API_URL + "posts/" + post.id + "/", post);
  }
  public putDetailPost(post: Post) {
    return this.put(API_URL + "posts/" + post.id + "/", post);
  }
  public deleteTaskList(post: Post) {
    return this.delete(API_URL + "posts/" + post.id, post);
  }
  public likePost(post: Post) {
    return this.post(API_URL + "posts/" + post.id + "/like/", post);
  }
  auth(login: any, password: any): Promise<IAuthResponse> {
    return this.post('http://localhost:8000/api/login/', {
      username: login,
      password: password
    });
  }
  logout(): Promise<any> {
    return this.post('http://localhost:8000/api/logout/', {
    });
  }
}
