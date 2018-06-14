import { Injectable } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

/*
  Generated class for the SpeechProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpeechProvider {
  constructor(private speechRecognition: SpeechRecognition){

  }

  hasPermission():boolean{
    let permission: boolean = false;

    this.speechRecognition.isRecognitionAvailable()
    .then((available: boolean) => {
      if(available){
        this.speechRecognition.hasPermission()
        .then((hasPermission: boolean) => {
          if (!hasPermission) {
            this.speechRecognition.requestPermission();
            permission = true;
          }else{
            permission = true;
          }
        });
      }
    });
    return permission;
  }
}
