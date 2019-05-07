import { Component, OnInit } from '@angular/core';
import {BackendApiService} from '../services/backend-api.service';
import {Todo} from '../models/models';
import {LoginService} from '../services/login.service';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public todos: Todo[] = [];
  constructor(private apiService: BackendApiService) {}
  ngOnInit() {
    this.apiService.getTodos().then(res => {
      this.todos = res;
    });
  }
  addTodo(name, phone) {
    if (name !== '') {
      let val = new Todo();
      val.name = name;
      val.phone = phone;
      this.apiService.createTodo(val).then(res => {
        name = '';
        phone = '';
        this.todos.push(res);
      });
    }
  }
  deleteItem(data) {
    this.apiService.deleteContact(data).then(res => {
      console.log(data.name + ' deleted');
      this.apiService.getTodos().then(r => {
        this.todos = r;
      });
    });
  }
  editItem(contact) {
    if(!contact.editing){
      contact.editing = true;
    }
    else {
      console.log(contact);
      this.apiService.editContact(contact).then(res => {
        console.log(res);
        contact.editing = false;
      });
    }
  }
  logout() {
    this.apiService.logout().then(res => {
      localStorage.clear();
      window.location.reload();
    });
  }

}
