import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Main} from './main.service';
import {AuthResponse} from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends Main {

  constructor(http: HttpClient) {
    super(http);
  }

  auth(login: any, password: any): Promise<AuthResponse> {
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
