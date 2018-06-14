import { SpeechProvider } from './../../providers/speech/speech';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  permission:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private speech: SpeechProvider) {
    this.permission = speech.hasPermission();
  }

  speaking(){
    if(this.permission){
      
    }
  }
}
