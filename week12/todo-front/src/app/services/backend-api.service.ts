import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Main } from './main.service';
import { TaskList } from '../models';
const API_URL = environment.apiUrl;

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
  public setTask(task: TaskList) {
    return this.post(API_URL + "task_list/", task);
  }
  public deleteTask(task: TaskList) {
    return this.delete(API_URL + "task_list/" + task.id, task);
  }
  public getTaskListDetail() {
    // return this.get(API_URL + "task_list/", {});
  }
  public get_task_list_detail_tasks() {
    // return this.get(API_URL + "task_list/", {});
  }
  public task_detail() {
    // return this.get(API_URL + "task_list/", {});
  }
}
