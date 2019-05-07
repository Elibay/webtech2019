import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import {AppComponent} from './app.component';
import {DetailComponent} from './todo/detail/detail.component';

const routes: Routes = [
  {path: 'index', component: AppComponent, data: {name: 'Главная'}},
  {path: 'list/:id', component: DetailComponent, data: {name: 'Detail'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule, ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
