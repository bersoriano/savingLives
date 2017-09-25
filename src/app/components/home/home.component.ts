import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { SHOW_MENU, SHOW_CATEGORIES, CATEGORY_HELP } from '../../core/actions/slideMenu';

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
  selectedCategory: String;
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

  selectCategory = function (category) {
    debugger;
    switch (category) {
      case "Solicitar ayuda y emergencias":
        this.selectedCategory = " - Ayuda";
        this.helpButtonTitle = "AYUDA"
        this.store.dispatch({ type: CATEGORY_HELP });
        break;
      case "Buscar personas":
        this.selectedCategory = "- Personas";
        break;
      case "Donaciones y apoyo":
        this.selectedCategory = "- Donaciones";
        break;
      case "Información falsa":
        this.selectedCategory = "- Info Falsa";
        break;
      case "Centro de acopio y albergues":
        this.selectedCategory = "- Acopio";
        break;
      case "Mascotas perdidas y encontradas":
        this.selectedCategory = "- Mascotas";
        break;
      default:
        this.selectedCategory = "";
    }
    console.log("Selected category: "+category);
  }

  ngOnInit() {
  }

}
