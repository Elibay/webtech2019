import { Component, OnInit } from '@angular/core';
import { BackendApiService } from './services/backend-api.service';
import { TaskList, Task } from './models';
import { HttpClient, HttpParams } from '@angular/common/http';
import { INT_TYPE } from '@angular/compiler/src/output/output_ast';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public logged = false;
  constructor() {
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }

}
