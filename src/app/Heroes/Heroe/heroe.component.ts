import { Component } from "@angular/core";

@Component
({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent
{
    public alterEgo: string= 'Spiderman';
    public habilidad: string[]= ['Trepar', 'Lanzar telarañas', 'Agilidad'];
    private nombreReal: string= 'Peter Parker';
    public edad: number= 29;

    /**
     * getnombreReal
     * return nombreReal;
     */
    get getnombreReal(): string 
    {
        return this.nombreReal;    
    }

    /**
     * cambiarNombreHeroe
     * 
     */
    public cambiarNombreHeroe() 
    {
        this.alterEgo= 'Capitán America'
    }
    public cambiarEdad()
    {
        this.edad=90;
    }

}