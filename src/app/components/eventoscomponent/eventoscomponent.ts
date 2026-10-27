import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-eventocomponent',
    standalone: false,
    templateUrl: 'eventoscomponent.html'
})

export class EventosComponent implements OnInit {
    mensaje: string;

    constructor() { 
        this.mensaje = "Hoy es martes";
        console.log("Soy el constructor")
    }
    cambiarMensaje(): void {
        this.mensaje = "faltan 3 dias para el viernes"
    }

    ngOnInit() { 
        console.log("Soy on init")
    }

    ngDoCheck(): void {
        console.log("Soy do check")
    }
}