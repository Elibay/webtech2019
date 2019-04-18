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
  title = 'todo-front';
  public tasks: TaskList[] = [];
  public todo = [];
  
  constructor(private apiService: BackendApiService) {
  }

  async ngOnInit() {
    this.tasks = await this.apiService.getTaskLists();
    this.tasks.forEach(async element => {
      element.task_list = await this.apiService.get_task_list_detail_tasks(element);
    });
  }
  addTodo(value){
    let task = new TaskList();
    task.name = value
    this.tasks.push(task)
    this.apiService.setTaskList(task);
  }
  deleteItem(value){
    this.apiService.deleteTaskList(value);
    for(let i=0 ;i<= this.tasks.length; i++){
      if(value== this.tasks[i]){
       this.tasks.splice(i,1);
      }
    }
  }
}
