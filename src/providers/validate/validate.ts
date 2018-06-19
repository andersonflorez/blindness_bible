import { Injectable } from '@angular/core';

/*
  Generated class for the ValidateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ValidateProvider {

  constructor() {
    
  }

  status={
    response:'',
    action:''
  };

  books=['Génesis',
        'Éxodo',
        'Levítico',
        'Números',
        'Deuteronomio',
        'Josué',
        'Jueces',
        'Rut',
        ['1 Samuel','1 de Samuel','primera Samuel','primera de Samuel'],
        ['2 Samuel','2 de Samuel','segunda Samuel','segunda de Samuel'],
        ['1 Reyes','1 de Reyes','primera Reyes','primera de Reyes'],
        ['2 Reyes','2 de Reyes','segunda Reyes','segunda de Reyes'],
        ['1 Crónicas','1 de Crónicas','primera Crónicas','primera de Crónicas'],
        ['2 Crónicas','2 de Crónicas','segunda Crónicas','segunda de Crónicas'],
        'Esdras',
        'Nehemías',
        'Ester',
        'Job',
        'Salmos',
        'Proverbios',
        'Eclesiastés',
        'Cantares',
        'Isaías',
        'Jeremías',
        'Lamentaciones',
        'Ezequiel',
        'Daniel',
        'Oseas',
        'Joel',
        'Amós',
        'Abdías',
        'Jonás',
        'Miqueas',
        'Nahúm',
        'Habacuc',
        'Sofonías',
        'Hageo',
        'Zacarías',
        'Malaquías',
        'Mateo',
        'Marcos',
        'Lucas',
        'Juan',
        'Hechos',
        'Romanos',
        ['1 Corintios','1 de Corintios','primera Corintios','primera de Corintios'],
        ['2 Corintios','2 de Corintios','segunda Corintios','segunda de Corintios'],
        'Gálatas',
        'Efesios',
        'Filipenses',
        'Colosenses',
        ['1 Tesalonicenses','1 de Tesalonicenses','primera Tesalonicenses','primera de Tesalonicenses'],
        ['2 Tesalonicenses','2 de Tesalonicenses','segunda Tesalonicenses','segunda de Tesalonicenses'],
        ['1 Timoteo','1 de Timoteo','primera Timoteo','primera de Timoteo'],
        ['2 Timoteo','2 de Timoteo','segunda Timoteo','segunda de Timoteo'],
        'Tito',
        'Filemón',
        'Hebreos',
        'Santiago',
        ['1 Pedro','1 de Pedro','primera Pedro','primera de Pedro'],
        ['2 Pedro','2 de Pedro','segunda Pedro','segunda de Pedro'],
        ['1 Juan','1 de Juan','primera Juan','primera de Juan'],
        ['2 Juan','2 de Juan','segunda Juan','segunda de Juan'],
        ['3 Juan','3 de Juan','tercera Juan','tercera de Juan'],
        'Judas',
        'Apocalipsis'];
  
  validate(matches:Array<string>){
    
    return this.status;
  }

}
