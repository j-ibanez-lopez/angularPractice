import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent 
{
  heroes: string[]= ['Spiderman', 'Capitán America', 'Hulk', 'Ironman', 'Daredevil'];
  constructor() { }
  //opcion 1: variable: string | undefined;
  //opcion 2:
  variable: string= ''
  public borrarHeroe(): string //Si no se poner el 'or' en la asignación aquí hay que acompañar al string usado en esta línea con: '|undefined'
  {
    console.log("Borrando heroe");
    this.variable =this.heroes.shift() || '';
    // console.log(variable2)
    return this.variable;
    
  }

  //variable = this.borrarHeroe();
}
