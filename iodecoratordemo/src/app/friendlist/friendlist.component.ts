import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css']
})
export class FriendlistComponent implements OnInit {

  @Input('list') friends : string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
