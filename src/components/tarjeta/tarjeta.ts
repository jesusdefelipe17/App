import { Component } from '@angular/core';

/**
 * Generated class for the TarjetaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tarjeta',
  templateUrl: 'tarjeta.html'
})
export class TarjetaComponent {


  text: string;

  constructor() {
    console.log('Hello ContadorComponent Component');
    this.text = 'Hello World';
  }
}


