import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-numeros-component',
  standalone: false,
  styleUrl: './form-numeros-component.css',
  templateUrl: './form-numeros-component.html',
})
export class FormNumerosComponent {
  @ViewChild("cajanumero") cajanumero!: ElementRef;

  arraynumeros: number[] = [];

  insertarNumero(): void {
    let numero = parseInt(this.cajanumero.nativeElement.value);
    this.arraynumeros.push(numero);
  }

  constructor() {
    this.arraynumeros = [];
  }
}
