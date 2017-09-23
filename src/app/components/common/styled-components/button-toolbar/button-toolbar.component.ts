import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-toolbar',
  inputs: ['buttonName'],
  templateUrl: './button-toolbar.component.html',
  styleUrls: ['./button-toolbar.component.scss','../../styles/buttons.scss']
})
export class ButtonToolbarComponent implements OnInit {
  buttonName: String;
  constructor() { }

  ngOnInit() {
  }

}
