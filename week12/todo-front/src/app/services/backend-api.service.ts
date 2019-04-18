import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Main } from './main.service';
import { TaskList, Task } from '../models';
const API_URL = 'http://localhost:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService extends Main {

  constructor(http: HttpClient) {
    super(http);
  }

  public getTaskLists(): Promise<[TaskList]> {
    return this.get(API_URL + "task_list/", {});
  }
  public setTaskList(task: TaskList) {
    return this.post(API_URL + "task_list/", task);
  }
  public deleteTaskList(task: TaskList) {
    return this.delete(API_URL + "task_list/" + task.id, task);
  }
  public getTaskListDetail() {
    // return this.get(API_URL + "task_list/", {});
  }
  public get_task_list_detail_tasks(task: TaskList): Promise<[Task]> {
    return this.get(API_URL + "task_list/" + task.id + "/task", {});
  }
  public task_detail() {
    // return this.get(API_URL + "task_list/", {});
  }
}
