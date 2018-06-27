import { ActionProvider } from './../action/action';
import { Injectable } from '@angular/core';
@Injectable()
export class ValidateProvider {

  constructor() {
    
  }

  status={
    response:'',
    action:''
  };

  books=[{libro:['Génesis'],book:'genesis'},
        {libro:['Éxodo'],book:'exodus'},
        {libro:['Levítico'],book:'lev'},
        {libro:['Números'],book:'num'},
        {libro:['Deuteronomio'],book:'deu'},
        {libro:['Josué'],book:'joshua'},
        {libro:['Jueces'],book:'judges'},
        {libro:['Rut'],book:''},
        {libro:['1 Samuel','1 de Samuel','primera Samuel','primera de Samuel'],book:'1sam'},
        {libro:['2 Samuel','2 de Samuel','segunda Samuel','segunda de Samuel'],book:'2sam'},
        {libro:['1 Reyes','1 de Reyes','primera Reyes','primera de Reyes'],book:'1kin'},
        {libro:['2 Reyes','2 de Reyes','segunda Reyes','segunda de Reyes'],book:'2kin'},
        {libro:['1 Crónicas','1 de Crónicas','primera Crónicas','primera de Crónicas'],book:'1chron'},
        {libro:['2 Crónicas','2 de Crónicas','segunda Crónicas','segunda de Crónicas'],book:'2chron'},
        {libro:['Esdras'],book:'ezra'},
        {libro:['Nehemías'],book:'nehemiah'},
        {libro:['Ester'],book:'esther'},
        {libro:['Job'],book:'job'},
        {libro:['Salmos'],book:'psalm'},
        {libro:['Proverbios'],book:'proverbs'},
        {libro:['Eclesiastés'],book:'ecc'},
        {libro:['Cantares'],book:''},
        {libro:['Isaías'],book:'isaiah'},
        {libro:['Jeremías'],book:'jere'},
        {libro:['Lamentaciones'],book:'lam'},
        {libro:['Ezequiel'],book:'ezek'},
        {libro:['Daniel'],book:'dan'},
        {libro:['Oseas'],book:'hosea'},
        {libro:['Joel'],book:'joel'},
        {libro:['Amós'],book:'amos'},
        {libro:['Abdías'],book:'oba'},
        {libro:['Jonás'],book:'jonah'},
        {libro:['Miqueas'],book:'micah'},
        {libro:['Nahúm'],book:'nahum'},
        {libro:['Habacuc'],book:'habak'},
        {libro:['Sofonías'],book:''},
        {libro:['Hageo'],book:'haggai'},
        {libro:['Zacarías'],book:''},
        {libro:['Malaquías'],book:'mal'},
        {libro:['Mateo'],book:'matt'},
        {libro:['Marcos'],book:'mark'},
        {libro:['Lucas'],book:'luke'},
        {libro:['Juan'],book:'john'},
        {libro:['Hechos'],book:'acts'},
        {libro:['Romanos'],book:'romans'},
        {libro:['1 Corintios','1 de Corintios','primera Corintios','primera de Corintios'],book:'1cor'},
        {libro:['2 Corintios','2 de Corintios','segunda Corintios','segunda de Corintios'],book:'2cor'},
        {libro:['Gálatas'],book:'gal'},
        {libro:['Efesios'],book:'eph'},
        {libro:['Filipenses'],book:'phil'},
        {libro:['Colosenses'],book:'col'},
        {libro:['1 Tesalonicenses','1 de Tesalonicenses','primera Tesalonicenses','primera de Tesalonicenses'],book:'1the'},
        {libro:['2 Tesalonicenses','2 de Tesalonicenses','segunda Tesalonicenses','segunda de Tesalonicenses'],book:'2the'},
        {libro:['1 Timoteo','1 de Timoteo','primera Timoteo','primera de Timoteo'],book:'1tim'},
        {libro:['2 Timoteo','2 de Timoteo','segunda Timoteo','segunda de Timoteo'],book:'2tim'},
        {libro:['Tito'],book:'tit'},
        {libro:['Filemón'],book:'phi'},
        {libro:['Hebreos'],book:'heb'},
        {libro:['Santiago'],book:'jam'},
        {libro:['1 Pedro','1 de Pedro','primera Pedro','primera de Pedro'],book:'1pet'},
        {libro:['2 Pedro','2 de Pedro','segunda Pedro','segunda de Pedro'],book:'2pet'},
        {libro:['1 Juan','1 de Juan','primera Juan','primera de Juan'],book:'1joh'},
        {libro:['2 Juan','2 de Juan','segunda Juan','segunda de Juan'],book:'2joh'},
        {libro:['3 Juan','3 de Juan','tercera Juan','tercera de Juan'],book:'3joh'},
        {libro:['Judas'],book:'jude'},
        {libro:['Apocalipsis'],book:'rev'}];
  
  validate(matches:Array<String>){
    let bookFilter: Array<String> = [];
    
    matches.forEach(match => {
      this.books.forEach(book => {
        
        if(bookFilter.length == 0){
          bookFilter = book.libro.filter(libro => {
            console.log(match.toLowerCase());
            console.log(libro.toLowerCase());
            return match.toLowerCase().indexOf(libro.toLowerCase()) > -1 ? true : false;
            
          });
          
          //console.log();
        }
      });
    });

    this.status.response = JSON.stringify(bookFilter);
    
    return this.status;
  }
}
