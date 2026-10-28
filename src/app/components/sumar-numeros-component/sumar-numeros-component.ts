import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sumar-numeros-component',
  standalone: false,
  styleUrl: './sumar-numeros-component.css',
  templateUrl: './sumar-numeros-component.html',
})
export class SumarNumerosComponent {
  @ViewChild("cajanumerouno") cajanumerouno!: ElementRef;
  @ViewChild("cajanumerodos") cajanumerodos!: ElementRef;
  numerouno!: number;
  numerodos!: number;
  suma: number;

constructor () {
  this.suma = 0;
}

sumarNumeros(): void {
  let numerouno = parseInt(this.cajanumerouno.nativeElement.value);
  let numerodos = parseInt(this.cajanumerodos.nativeElement.value);
  this.suma = numerouno + numerodos;


}

}