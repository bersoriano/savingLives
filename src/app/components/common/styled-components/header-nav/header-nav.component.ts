import { Component, Input, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { SHOW_MENU, SHOW_CATEGORIES } from '../../../../core/actions/slideMenu';

interface AppState {
  slideTo: string;
}

@Component({
  selector: 'app-header-nav',
  inputs: ['headerName','headerCategory'],
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  headerName: String;
  headerCategory: String;
  slideTo: Observable<string>;
  constructor(private store: Store<AppState>) { 
    this.slideTo = store.select('slideTo');
  }

  ngOnInit() {
  }

  selectMenu = function () {
    debugger;
    console.log("Current state: "+this.slideTo);
    this.store.dispatch({ type: SHOW_MENU });
    this.headerCategory = "";
  }

}
