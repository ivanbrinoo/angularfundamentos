import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'numeros-estilos',
    standalone: false,
    templateUrl: './numerosestiloscomponent.html',
    styleUrl: './numerosestiloscomponent.css'
})

export class NumerosEstilos implements OnInit {
    numeros: any []
    constructor() { 
        this.numeros = [15, 242, 307, 456, 562, 672, 700]

    }

    generarNumero(): void {
        //declaramos un numero con valor aleatorio
        let random = Math.floor(Math.random() * 100) + 1;
        this.numeros.push(random);
    }
    ngOnInit() { }
}