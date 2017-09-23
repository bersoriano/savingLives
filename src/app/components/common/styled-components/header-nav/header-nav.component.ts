import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  inputs: ['headerName'],
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  headerName: String;
  constructor() { }

  ngOnInit() {
  }

}
