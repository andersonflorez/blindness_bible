import { Injectable } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

/*
  Generated class for the SpeechProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpeechProvider {
  matches_detected: Array<string> = [];
  constructor(private speechRecognition: SpeechRecognition) {

  }

  hasPermission(): string {
    let permission: string = null;
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        permission = "Tiene permisos: " + (hasPermission ? "si" : "no");
        if (!hasPermission) {
          this.speechRecognition.requestPermission();
        }
      });

    return permission;
  }

  listen():Array<string> {

    let options = {
      language: 'es-CO'
    }

    this.speechRecognition.startListening(options)
    .subscribe(
      (matches: Array<string>) => {
        this.matches_detected = matches;
      },(onerror: Array<string>) => {
        this.matches_detected = onerror;
      });

    return this.matches_detected;
  }


}
