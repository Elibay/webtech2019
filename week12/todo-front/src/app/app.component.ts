import { Component, OnInit } from '@angular/core';
import { BackendApiService } from './services/backend-api.service';
import { TaskList } from './models';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo-front';
  public tasks: TaskList[] = [];
  public todo = [];
  
  constructor(private apiService: BackendApiService) {
  }

  ngOnInit() {
    let task = new TaskList();
    task.name = "123";
    task.id = 123;
    this.tasks.push(task);
    this.apiService.getTaskLists().then(res => {
      this.tasks = res;
    });
    console.log("Hello");
  }
  addTodo(value){
    let task = new TaskList();
    task.name = value
    this.tasks.push(task)
    this.apiService.setTask(task);
  }
  deleteItem(value){
    this.apiService.deleteTask(value);
    for(let i=0 ;i<= this.tasks.length ;i++){
      if(value== this.tasks[i]){
       this.tasks.splice(i,1);
      }
    }
  }
}
