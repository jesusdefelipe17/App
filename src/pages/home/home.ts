import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AboutPage} from "../about/about";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {


  }

  boton():void{

    this.navCtrl.push(AboutPage);

  }


  webDB(){
    window.open("http://es.dragonball.wikia.com/wiki/Saga_de_Pilaf",'_system', 'location=yes');

  }
  webDBZ(){
    window.open("http://es.dragonball.wikia.com/wiki/Saga_de_Freezer",'_system', 'location=yes');

  }
  webDBGT(){
    window.open("http://es.dragonball.wikia.com/wiki/Saga_de_los_Dragones_Malignos",'_system', 'location=yes');

  }

    webDBS(){
  window.open("http://es.dragonball.wikia.com/wiki/Saga_de_Supervivencia_Universal",'_system', 'location=yes');

}

}
