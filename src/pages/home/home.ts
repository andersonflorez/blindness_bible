import { SpeechProvider } from './../../providers/speech/speech';
import { ValidateProvider } from './../../providers/validate/validate';
import { ActionProvider } from './../../providers/action/action';
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
  matches:Array<String>;
  respuesta;
  constructor(public navCtrl: NavController, public navParams: NavParams, private speech: SpeechProvider, private validator: ValidateProvider,private action: ActionProvider) {
    this.permission = speech.hasPermission();
  }

  speaking(){
    if(this.permission){
      this.matches = this.speech.listen();
      this.respuesta = JSON.stringify(this.matches);
    }
  }

  test(){
    let response = this.validator.validate([this.valor]);
    this.respuesta = JSON.stringify(response);
    if(response.action == 'pause'){
      this.action.pause();
    }
    else if(response.action == 'stop'){
      this.action.stop();
    }
    else{
      if(response.book && response.cap){
        this.respuesta = JSON.stringify(this.action.play(response));
      }
      else if(response.action == 'play'){
        this.action.resume();
      }
      else{
        this.respuesta = JSON.stringify("error");
        console.log(response);
      }
    }
  }
}
