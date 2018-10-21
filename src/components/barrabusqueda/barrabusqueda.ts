import { Component } from '@angular/core';

/**
 * Generated class for the BarrabusquedaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'barrabusqueda',
  templateUrl: 'barrabusqueda.html'
})
export class BarrabusquedaComponent {

  constructor() {
    console.log('Hello BarrabusquedaComponent Component');
    this.initializeItems()
  }

items;

  initializeItems() {
    this.items = [
      'Goku',
      'Vegeta',
      'Gohan',
      'Piccolo',
      'Broly',
      'Truks',
      'Bulma',
      'Gogeta',
      'Veggeto',
      'Goten',
      'Celula',
      'Buu',
      'Freezer',
      'Krillin',
      'Jiren',
      'A-17',
      'A-18',
      'Gotrunks',
      'Yamcha',
      'Whis',
      'Toppo',
      'Kahio del norte',
      'Gohan futuro',
      'Mutenroshi',
      'Videl',
      'Jamemba',
      'Celula jr',
      'Pan',
      'Gokou gt',
      'Vegeta Ozaru'

    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }



  Personajes(){
    window.open("http://es.dragonball.wikia.com/wiki/Categor%C3%ADa:Personajes_de_Dragon_Ball_Z",'_system', 'location=yes');

  }
}
