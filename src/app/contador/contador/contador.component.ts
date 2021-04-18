import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h2> {{ title}} </h2>
        <h2> {{ 1-5}} </h2>
        <h6> La base es: <strong> {{numeroBase}}</strong></h6>

        <button (click)="sumar(numeroBase)"> + {{numeroBase}} </button>

        <span>{{ numero }}</span>

        <button (click)="restar(numeroBase)"> - {{numeroBase}} </button>`

        })
export class contadorComponent
{
    title = 'Contador App';

    numero: number = 10;
    numeroBase: number = 5;

    sumar(valor: number): number 
    {

        return this.numero += valor;
    }

    restar(valor: number): number 
    {
        return this.numero -= valor;
    }
}