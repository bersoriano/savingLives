import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-title',
  inputs: ['titleName'],
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent implements OnInit {
  titleName: String;
  constructor() { }

  ngOnInit() {
  }

}
