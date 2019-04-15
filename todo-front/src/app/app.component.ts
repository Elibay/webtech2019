import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-front';
  todoArray=[]
  addTodo(value){
    this.todoArray.push(value)
    // console.log(this.todos)
  }
  deleteItem(){
   console.log("delete item")
  }
}
