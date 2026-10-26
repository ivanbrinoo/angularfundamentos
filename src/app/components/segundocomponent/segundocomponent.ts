import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-segundo',
    standalone: false,
    templateUrl: './segundocomponent.html'
})

export class SegundoComponent implements OnInit {
    nombre: string;
    diasemana: string;
    numero: number;
    constructor() { 
        this.nombre = "Ivan";
        this.diasemana = "Lunes";
        this.numero = 7;
     }

    ngOnInit() { }
}