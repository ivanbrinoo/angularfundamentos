import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-doble-component',
  standalone: false,
  styleUrl: './form-doble-component.css',
  templateUrl: './form-doble-component.html',
})
export class FormDobleComponent {
  @ViewChild("cajanumero") cajanumero!: ElementRef;
  doble: number;
  numero: any;

constructor() {
  this.doble = 0;
}

mostrarDoble(): void {
  let numero = parseInt(this.cajanumero.nativeElement.value);
  this.doble = numero * 2;



}

}
