import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{ titulo }} por expresión</h1>
    <button (click)="numero = numero + 1"> +1 </button>
    <span> {{ numero }} </span>
    <button (click)="numero = numero - 1"> -1 </button>

    <h1>{{ titulo }} por funciones</h1>
    <button (click)="incrementa()"> +1 </button>
    <span> {{ numerof }} </span>
    <button (click)="decrementa()"> -1 </button>

    <h1>{{ titulo }} por función</h1>
    <button (click)="acumular(+1)"> +1 </button>
    <span> {{ numeroa }} </span>
    <button (click)="acumular(-1)"> -1 </button>

    <h2>La base es: <strong> {{base}}</strong></h2>

    <h1>{{ titulo }} por función con base</h1>
    <button (click)="acumular2(+base)"> +{{base}} </button>
    <span> {{ numeroa }} </span>
    <button (click)="acumular2(-base)"> -{{base}} </button>
    `
})
export class ContadorComponent{
    titulo: string = 'Contador App';
    numero: number = 10;
    numerof: number =20;
    numeroa: number =30;
    base: number = 5;
  
    incrementa() {
      this.numerof +=1; 
    }
    decrementa() {
      this.numerof -=1; 
    }
  
    acumular( valor: number){
       this.numeroa += valor; 
    }
    acumular2( base: number){
       this.numeroa += base; 
    }

}