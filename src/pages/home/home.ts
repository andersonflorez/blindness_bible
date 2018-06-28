import { SpeechRecognition } from '@ionic-native/speech-recognition';
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
  permission:String;
  valor:string;
  respuesta:string;
  matches: Array<String>
  constructor(private speechRecognition: SpeechRecognition, public navCtrl: NavController, public navParams: NavParams, private speech: SpeechProvider, private validator: ValidateProvider,private action: ActionProvider) {
    this.speech.hasPermission();
  }

  speaking(){
    this.respuesta = "escuchando";
    let options = {
      language: 'es-CO',
      showPopup: true,
    }

    this.speechRecognition.startListening(options)
    .subscribe(
      (matches: Array<string>) => {
        this.test(matches);
      },(onerror) => {
        this.respuesta = JSON.stringify(onerror);
      });
  }

  test(matches:Array<string>){
    let response = this.validator.validate(matches);

    this.respuesta = JSON.stringify(response);
    if(response.action == 'pause'){
      this.action.pause();
    }
    else if(response.action == 'stop'){
      this.action.stop();
    }
    else{
      if(response.book && response.cap){
        this.action.play(response);
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
