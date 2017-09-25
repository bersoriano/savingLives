import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapsible-list',
  inputs: ['collapsibleTitle', 'collapsibleDescription','collapsibleLocation'],
  templateUrl: './collapsible-list.component.html',
  styleUrls: ['./collapsible-list.component.scss']
})
export class CollapsibleListComponent implements OnInit {
  collapsibleTitle: String;
  collapsibleDescription: String;
  collapsibleLocation: String;
  constructor() { }

  ngOnInit() {
  }

}
