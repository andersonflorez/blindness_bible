import { SpeechProvider } from './../../providers/speech/speech';
import { ValidateProvider } from './../../providers/validate/validate';
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
  valor:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private speech: SpeechProvider, private validator: ValidateProvider) {
    this.permission = speech.hasPermission();
  }

  speaking(){
    if(this.permission){
      this.speech.listen();
    }
  }

  test(){
    let respuesta = this.validator.validate([this.valor]);
    console.log(respuesta.response);
  }
}
