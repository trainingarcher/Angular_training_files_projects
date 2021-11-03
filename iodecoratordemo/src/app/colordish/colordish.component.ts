import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-colordish',
  templateUrl: './colordish.component.html',
  styleUrls: ['./colordish.component.css']
})
export class ColordishComponent implements OnInit {
  @Output() colorEvent : EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  addToColorDish(val:any){
    this.colorEvent.emit(val);
  }
}
