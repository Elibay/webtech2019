import { Component, OnInit } from '@angular/core';
import { BackendApiService } from './services/backend-api.service';
import { TaskList } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo-front';
  public tasks: TaskList[] = [];
  public todo = [];
  
  constructor() {
  }

  ngOnInit() {
    let task = new TaskList();
    task.name = "123";
    task.id = 123;
    this.tasks.push(task);
    // this.apiService.getTaskLists().then(res => {
      // this.tasks = res;
    // });
    console.log("Hello");
  }
  addTodo(value){
    console.log(this.tasks);
  }
  deleteItem(){
   console.log("delete item")
  }
}
