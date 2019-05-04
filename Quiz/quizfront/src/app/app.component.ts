import { Component, OnInit } from '@angular/core';
import { BackendApiService } from './services/backend-api.service';
import { Post } from './models';
import { HttpClient, HttpParams } from '@angular/common/http';
import { INT_TYPE } from '@angular/compiler/src/output/output_ast';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo-front';
  public tasks: Post[] = [];
  public logged = false;
  public login: any = '';
  public password: any = '';
  public loading = false;
  public name: any = '';
  constructor(private apiService: BackendApiService) {
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }

    if (this.logged) {
      this.apiService.getPostList().then(res => {
        this.tasks = res;
        setTimeout(() => {
          this.loading = true;
        }, 2000);
      });
    }
  }

  add() {
    if (this.name !== '') {
      let p = new Post();
      p.title = this.name;
      this.apiService.createPost(p).then(res => {
        this.name = '';
        this.tasks.push(res);
      });
    }
  }

  putDetailPost(c: Post) {
    this.apiService.putDetailPost(c);
  }
  deleteItem(value){
    this.apiService.deleteTaskList(value);
    for(let i=0 ;i<= this.tasks.length; i++){
      if(value== this.tasks[i]){
       this.tasks.splice(i,1);
      }
    }
  }
  like(value) {
    this.apiService.likePost(value);
    for(let i=0 ;i<= this.tasks.length; i++){
      if(value== this.tasks[i]){
       this.tasks[i].like_count += 1;
      }
    }
  }

  auth() {
    if (this.login !== '' && this.password !== '') {
      this.apiService.auth(this.login, this.password).then(res => {
        localStorage.setItem('token', res.token);

        this.logged = true;

        this.apiService.getPostList().then(r => {
          this.tasks = r;
          setTimeout(() => {
            this.loading = true;
          }, 2000);
        });

      });
    }
  }

  logout() {
    this.apiService.logout().then(res => {
      localStorage.clear();
      this.logged = false;
    });
  }
  
}
