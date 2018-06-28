import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

import { MyApp } from './app.component';
import { SpeechProvider } from '../providers/speech/speech';
import { ValidateProvider } from '../providers/validate/validate';
import { ActionProvider } from '../providers/action/action';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Media } from '@ionic-native/media';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpeechProvider,
    SpeechRecognition,
    ValidateProvider,
    ActionProvider,
    FileTransfer,
    Media,
    File
  ]
})
export class AppModule {}
