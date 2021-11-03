import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-taskmaster',
  templateUrl: './taskmaster.component.html',
  styleUrls: ['./taskmaster.component.css']
})
export class TaskmasterComponent implements OnInit {

  @Input('tasks') tasklist : string[] = [];
  @Output('deltask') taskDeleteEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  deleteTask(index:number){
    this.taskDeleteEvent.emit(index);
  }
}
