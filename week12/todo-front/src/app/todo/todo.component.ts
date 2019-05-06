/* tslint:disable:prefer-const triple-equals */
import { Component, OnInit } from '@angular/core';
import {TaskList} from '../models';
import {BackendApiService} from '../services/backend-api.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public tasks: TaskList[] = [];
  public todo = [];

  constructor(private apiService: BackendApiService) { }

  async ngOnInit() {
    this.tasks = await this.apiService.getTaskLists();
    this.tasks.forEach(async element => {
      element.task_list = await this.apiService.get_task_list_detail_tasks(element);
    });
  }
  addTodo(value) {
    let task = new TaskList();
    task.name = value
    this.tasks.push(task)
    this.apiService.setTaskList(task);
  }
  deleteItem(value) {
    this.apiService.deleteTaskList(value);
    for (let i = 0 ; i <= this.tasks.length; i++) {
      if (value == this.tasks[i]) {
       this.tasks.splice(i, 1);
      }
    }
  }

}
