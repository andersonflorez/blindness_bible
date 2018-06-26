import { Injectable } from '@angular/core';
@Injectable()
export class ValidateProvider {

  constructor() {
    
  }

  status={
    response:'',
    action:''
  };

  books=[{libro:'Génesis',book:''},
        {libro:'Éxodo',book:''},
        {libro:'Levítico',book:''},
        {libro:'Números',book:''},
        {libro:'Deuteronomio',book:''},
        {libro:'Josué',book:''},
        {libro:'Jueces',book:''},
        {libro:'Rut',book:''},
        {libro:['1 Samuel','1 de Samuel','primera Samuel','primera de Samuel'],book:''},
        {libro:['2 Samuel','2 de Samuel','segunda Samuel','segunda de Samuel'],book:''},
        {libro:['1 Reyes','1 de Reyes','primera Reyes','primera de Reyes'],book:''},
        {libro:['2 Reyes','2 de Reyes','segunda Reyes','segunda de Reyes'],book:''},
        {libro:['1 Crónicas','1 de Crónicas','primera Crónicas','primera de Crónicas'],book:''},
        {libro:['2 Crónicas','2 de Crónicas','segunda Crónicas','segunda de Crónicas'],book:''},
        {libro:'Esdras',book:''},
        {libro:'Nehemías',book:''},
        {libro:'Ester',book:''},
        {libro:'Job',book:''},
        {libro:'Salmos',book:''},
        {libro:'Proverbios',book:''},
        {libro:'Eclesiastés',book:''},
        {libro:'Cantares',book:''},
        {libro:'Isaías',book:''},
        {libro:'Jeremías',book:''},
        {libro:'Lamentaciones',book:''},
        {libro:'Ezequiel',book:''},
        {libro:'Daniel',book:''},
        {libro:'Oseas',book:''},
        {libro:'Joel',book:''},
        {libro:'Amós',book:''},
        {libro:'Abdías',book:''},
        {libro:'Jonás',book:''},
        {libro:'Miqueas',book:''},
        {libro:'Nahúm',book:''},
        {libro:'Habacuc',book:''},
        {libro:'Sofonías',book:''},
        {libro:'Hageo',book:''},
        {libro:'Zacarías',book:''},
        {libro:'Malaquías',book:''},
        {libro:'Mateo',book:''},
        {libro:'Marcos',book:''},
        {libro:'Lucas',book:''},
        {libro:'Juan',book:''},
        {libro:'Hechos',book:''},
        {libro:'Romanos',book:''},
        {libro:['1 Corintios','1 de Corintios','primera Corintios','primera de Corintios'],book:''},
        {libro:['2 Corintios','2 de Corintios','segunda Corintios','segunda de Corintios'],book:''},
        {libro:'Gálatas',book:''},
        {libro:'Efesios',book:''},
        {libro:'Filipenses',book:''},
        {libro:'Colosenses',book:''},
        {libro:['1 Tesalonicenses','1 de Tesalonicenses','primera Tesalonicenses','primera de Tesalonicenses'],book:''},
        {libro:['2 Tesalonicenses','2 de Tesalonicenses','segunda Tesalonicenses','segunda de Tesalonicenses'],book:''},
        {libro:['1 Timoteo','1 de Timoteo','primera Timoteo','primera de Timoteo'],book:''},
        {libro:['2 Timoteo','2 de Timoteo','segunda Timoteo','segunda de Timoteo'],book:''},
        {libro:'Tito',book:''},
        {libro:'Filemón',book:''},
        {libro:'Hebreos',book:''},
        {libro:'Santiago',book:''},
        {libro:['1 Pedro','1 de Pedro','primera Pedro','primera de Pedro'],book:''},
        {libro:['2 Pedro','2 de Pedro','segunda Pedro','segunda de Pedro'],book:''},
        {libro:['1 Juan','1 de Juan','primera Juan','primera de Juan'],book:''},
        {libro:['2 Juan','2 de Juan','segunda Juan','segunda de Juan'],book:''},
        {libro:['3 Juan','3 de Juan','tercera Juan','tercera de Juan'],book:''},
        {libro:'Judas',book:''},
        {libro:'Apocalipsis',book:''}];
  
  validate(matches:Array<string>){
    matches.forEach(match => {
      
    });
    return this.status;
  }
}
