import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-nombres-array-component',
  standalone: false,
  styleUrl: './form-nombres-array-component.css',
  templateUrl: './form-nombres-array-component.html',
})
export class FormNombresArrayComponent {
  @ViewChild("cajanombre") cajanombre!: ElementRef;
  arraynombres: string []

insertarNombre(){
  let nombre = this.arraynombres.push(this.cajanombre.nativeElement.value);

}


constructor(){
  this.arraynombres = [];
}


}
