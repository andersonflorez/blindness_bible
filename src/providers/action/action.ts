import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file';
import { Media, MediaObject } from '@ionic-native/media';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';

/*
  Generated class for the ActionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ActionProvider {

  mediaObject: MediaObject;

  constructor(private file: File,private transfer: FileTransfer,private media: Media) {

  } 


  play(response){
    if(typeof this.mediaObject === "object"){
      this.mediaObject.release();
    }
    
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = `https://s3.amazonaws.com/audiosbiblia/${response.book}_${response.cap}.mp3`;

    fileTransfer.download(url, this.file.dataDirectory + 'audio.mp3').then((entry) => {
      
      this.mediaObject = this.media.create(entry.nativeURL);
      this.mediaObject.play();
    }, (error) => {
      return error;
    });
  }

  resume(){
    this.mediaObject.play();
  }

  pause(){
    this.mediaObject.pause();
  }

  stop(){
    this.mediaObject.stop();
    this.mediaObject.release();
  }
  
  

}
