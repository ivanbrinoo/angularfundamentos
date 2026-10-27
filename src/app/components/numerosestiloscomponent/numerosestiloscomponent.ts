import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'numeros-estilos',
    standalone: false,
    templateUrl: './numerosestiloscomponent.html'
})

export class NumerosEstilos implements OnInit {
    numeros: any []
    constructor() { 
        this.numeros = [1, 2, 3, 4, 5, 6, 7]

    }

    ngOnInit() { }
}