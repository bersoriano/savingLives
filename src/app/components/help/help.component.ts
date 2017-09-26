import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor() { }
  /* Help component */
  helpButtonTitle: String;
  helpTitle: String = "EMERGENCIAS Y AYUDA REQUERIDA";

  helptitleOne = "Edificio colapsado en Roma";
  collapsibleDesOne = "Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum";
  collapsibleLocationOne = "Mexico citu";
  


  ngOnInit() {
  }

}
