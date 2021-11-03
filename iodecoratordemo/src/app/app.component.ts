import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iodecoratordemo';

  data : string = "";
  fndlist : string[] = [];
  colors : string[] = [];
  tasks : string[] = [];
  deleteditem : string = "";

  passValue(evt:any){
    this.data = evt.target.value;
    //console.log(this.data);
  }

  addToFriendList(evt:any){
    const val = evt.target.value;
    this.fndlist.push(val);
    console.log(this.fndlist);
  }

  afterColorAdd(evt:any){
    this.colors.push(evt);
  }
  addTask(task:any){
    this.tasks.push(task);
  }

  removeTask(taskindex:number){
    this.deleteditem=this.tasks[taskindex];
    this.tasks = this.tasks.filter((val, index) => index !==taskindex );
  }

}
