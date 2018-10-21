import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  seguirTwitter(){
    window.open("http://twitter.com/kepchu17",'_system', 'location=yes');

  }
  seguirInstagram(){
    window.open("http://instagram.com/kepchu17",'_system', 'location=yes');

  }
}
