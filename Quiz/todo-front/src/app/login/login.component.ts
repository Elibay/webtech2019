import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import {withIdentifier} from 'codelyzer/util/astQuery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login: any = '';
  public password: any = '';

  constructor(private apiService: LoginService) { }

  ngOnInit() {
  }

  public auth() {
    if (this.login !== '' && this.password !== '') {
      this.apiService.auth(this.login, this.password).then(res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        window.location.reload();
      });
    }
  }

}
