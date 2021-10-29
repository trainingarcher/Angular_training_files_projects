import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';

  todovalue: string = "";
  list : Todo[] = [];

  nginit(){
    this.list = [];
    this.todovalue = "";
  }

  addItem(){
    console.log("Collecting the data..!!!"+ this.todovalue);
    if(this.todovalue!==""){
      const newItem : Todo = {
        id : Date.now(),
        value : this.todovalue,
        isDone : false
      };
      this.list.push(newItem);
      console.log(newItem);
    }
    this.todovalue="";
  }

  deleteItem(id : number)
  {
    this.list = this.list.filter( item => item.id !== id );
  }
}
