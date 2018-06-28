import { Injectable } from '@angular/core';
@Injectable()
export class ValidateProvider {

  constructor() {
    
  }

  response={
    cap:'',
    book:'',
    action:''
  };

  books=[{libro:['Génesis'],book:'genesis',caps:50},
        {libro:['Éxodo'],book:'exodus',caps:40},
        {libro:['Levítico'],book:'lev',caps:27},
        {libro:['Números'],book:'num',caps:36},
        {libro:['Deuteronomio'],book:'deu',caps:34},
        {libro:['Josué'],book:'joshua',caps:24},
        {libro:['Jueces'],book:'judges',caps:21},
        {libro:['Rut'],book:'',caps:4},
        {libro:['1 Samuel','1 de Samuel','primera Samuel','primera de Samuel'],book:'1sam',caps:31},
        {libro:['2 Samuel','2 de Samuel','segunda Samuel','segunda de Samuel'],book:'2sam',caps:24},
        {libro:['1 Reyes','1 de Reyes','primera Reyes','primera de Reyes'],book:'1kin',caps:22},
        {libro:['2 Reyes','2 de Reyes','segunda Reyes','segunda de Reyes'],book:'2kin',caps:25},
        {libro:['1 Crónicas','1 de Crónicas','primera Crónicas','primera de Crónicas'],book:'1chron',caps:29},
        {libro:['2 Crónicas','2 de Crónicas','segunda Crónicas','segunda de Crónicas'],book:'2chron',caps:36},
        {libro:['Esdras'],book:'ezra',caps:10},
        {libro:['Nehemías'],book:'nehemiah',caps:13},
        {libro:['Ester'],book:'esther',caps:10},
        {libro:['Job'],book:'job',caps:42},
        {libro:['Salmos'],book:'psalm',caps:150},
        {libro:['Proverbios'],book:'proverbs',caps:31},
        {libro:['Eclesiastés'],book:'ecc',caps:12},
        {libro:['Cantares'],book:'',caps:8},
        {libro:['Isaías'],book:'isaiah',caps:66},
        {libro:['Jeremías'],book:'jere',caps:52},
        {libro:['Lamentaciones'],book:'lam',caps:5},
        {libro:['Ezequiel'],book:'ezek',caps:48},
        {libro:['Daniel'],book:'dan',caps:12},
        {libro:['Oseas'],book:'hosea',caps:14},
        {libro:['Joel'],book:'joel',caps:3},
        {libro:['Amós'],book:'amos',caps:9},
        {libro:['Abdías'],book:'oba',caps:1},
        {libro:['Jonás'],book:'jonah',caps:4},
        {libro:['Miqueas'],book:'micah',caps:7},
        {libro:['Nahúm'],book:'nahum',caps:3},
        {libro:['Habacuc'],book:'habak',caps:3},
        {libro:['Sofonías'],book:'',caps:3},
        {libro:['Hageo'],book:'haggai',caps:2},
        {libro:['Zacarías'],book:'',caps:14},
        {libro:['Malaquías'],book:'mal',caps:4},
        {libro:['Mateo'],book:'matt',caps:28},
        {libro:['Marcos'],book:'mark',caps:16},
        {libro:['Lucas'],book:'luke',caps:24},
        {libro:['Juan'],book:'john',caps:21},
        {libro:['Hechos'],book:'acts',caps:28},
        {libro:['Romanos'],book:'romans',caps:16},
        {libro:['1 Corintios','1 de Corintios','primera Corintios','primera de Corintios'],book:'1cor',caps:16},
        {libro:['2 Corintios','2 de Corintios','segunda Corintios','segunda de Corintios'],book:'2cor',caps:13},
        {libro:['Gálatas'],book:'gal',caps:6},
        {libro:['Efesios'],book:'eph',caps:6},
        {libro:['Filipenses'],book:'phil',caps:4},
        {libro:['Colosenses'],book:'col',caps:4},
        {libro:['1 Tesalonicenses','1 de Tesalonicenses','primera Tesalonicenses','primera de Tesalonicenses'],book:'1the',caps:5},
        {libro:['2 Tesalonicenses','2 de Tesalonicenses','segunda Tesalonicenses','segunda de Tesalonicenses'],book:'2the',caps:3},
        {libro:['1 Timoteo','1 de Timoteo','primera Timoteo','primera de Timoteo'],book:'1tim',caps:6},
        {libro:['2 Timoteo','2 de Timoteo','segunda Timoteo','segunda de Timoteo'],book:'2tim',caps:4},
        {libro:['Tito'],book:'tit',caps:3},
        {libro:['Filemón'],book:'phi',caps:1},
        {libro:['Hebreos'],book:'heb',caps:13},
        {libro:['Santiago'],book:'jam',caps:5},
        {libro:['1 Pedro','1 de Pedro','primera Pedro','primera de Pedro'],book:'1pet',caps:5},
        {libro:['2 Pedro','2 de Pedro','segunda Pedro','segunda de Pedro'],book:'2pet',caps:3},
        {libro:['1 Juan','1 de Juan','primera Juan','primera de Juan'],book:'1joh',caps:5},
        {libro:['2 Juan','2 de Juan','segunda Juan','segunda de Juan'],book:'2joh',caps:1},
        {libro:['3 Juan','3 de Juan','tercera Juan','tercera de Juan'],book:'3joh',caps:1},
        {libro:['Judas'],book:'jude',caps:1},
        {libro:['Apocalipsis'],book:'rev',caps:22}];


  action = {
    play: ['inicie','reproducir','reproduzca','continuar','reanudar'],
    stop: ['parar','pare','stop'],
    pause: ['detengase','detenga','pause'],
  }
  
  validate(matches:Array<String>){
    let bookFilter= {
      book:null,
      cap:null
    };
    let actionSelected;

    matches.forEach(match => {
      let bookSelected:Array<String>;
      this.books.forEach(book => {
        
          bookSelected = book.libro.filter(libro => {
            return match.toLowerCase().indexOf(libro.toLowerCase()) > -1 ? true : false;
          });
          
        
        if(bookSelected.length > 0){
          
          let preText = match.substr(match.toLowerCase().indexOf(bookSelected[0].toLowerCase()));
          let capTemp = preText.substr(preText.search(/\d/));
          let cap = capTemp.indexOf(" ") > 0 ? capTemp.substr(0,capTemp.indexOf(" ")) : capTemp;
          
          
          if(parseInt(cap) > 0 && parseInt(cap) <= book.caps){
            bookFilter.book = book.book;
            bookFilter.cap = cap.length == 1 ? '0'+cap : cap;
          }
        }
      });

      let playSelected;
      playSelected = this.action.play.filter(action => {
        return match.toLowerCase().indexOf(action) > -1 ? true : false;
      });

      let stopSelected;
      stopSelected = this.action.stop.filter(action => {
        return match.toLowerCase().indexOf(action) > -1 ? true : false;
      });

      let pauseSelected;
      pauseSelected = this.action.pause.filter(action => {
        return match.toLowerCase().indexOf(action) > -1 ? true : false;
      });

      if(playSelected.length > 0){
        actionSelected = 'play';
      }
      else if(pauseSelected.length > 0){
        actionSelected = 'pause';
      }
      else if(stopSelected.length > 0){
        actionSelected = 'stop';
      }

    });


    this.response.action = actionSelected;
    this.response.book = bookFilter.book;
    this.response.cap = bookFilter.cap;
    
    return this.response;
  }
}
