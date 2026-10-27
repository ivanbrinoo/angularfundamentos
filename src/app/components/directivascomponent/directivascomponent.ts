import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directivas',
    standalone: false,
    templateUrl: './directivascomponent.html'
})

export class DirectivasComponent implements OnInit {
    deportes: string [];
    constructor() { 
        this.deportes = ["Futbol", "Baloncesto", "Rugby", "Voleibol"]
    }

    ngOnInit() { }
}