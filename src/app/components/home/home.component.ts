import { Component, OnInit } from '@angular/core';

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
  constructor() { }
  selectCity = function (city) {
    debugger;
    this.selectedCity = city;
  }
  ngOnInit() {
  }

}
