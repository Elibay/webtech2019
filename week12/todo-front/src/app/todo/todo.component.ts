import { Component, OnInit } from '@angular/core';
import {BackendApiService} from '../services/backend-api.service';
import {Todo} from '../models/models';

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
  addTodo(value) {
    if (value !== '') {
      let val = new Todo();
      val.name = value;
      console.log(val);
      this.apiService.createTodo(val).then(res => {
        value = '';
        this.todos.push(res);
      });
    }
  }
  deleteItem(value) {

  }

}
