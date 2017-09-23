import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { SHOW_MENU, SHOW_CATEGORIES } from '../../core/actions/slideMenu';

interface AppState {
  slideTo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cities: Array<String> = ['CDMX', 'Puebla', 'Morelos', 'Otros'];
  title: String = 'SELECCIONA UNA CIUDAD';
  categoriesTitle: String = 'CATEGORIAS';
  categories: Array<String> = [
    'Solicitar ayuda y emergencias',
    'Buscar personas',
    'Donaciones y apoyo',
    'Información falsa',
    'Centro de acopio y albergues',
    'Mascotas perdidas y encontradas'
  ];
  selectedCity: String;
  slideTo: Observable<string>;
  constructor(private store: Store<AppState>) { 
    this.slideTo = store.select('slideTo');
  }
  
  selectCity = function (city) {
    debugger;
    this.store.dispatch({ type: SHOW_CATEGORIES });
    this.selectedCity = city;
    console.log("Ciudad seleccionada: "+city);
  }

  ngOnInit() {
  }

}
