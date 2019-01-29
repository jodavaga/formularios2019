import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-template',
  templateUrl: './formulario-template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border: 1px solid red;
    }
  `]
})
export class FormularioTemplateComponent implements OnInit {

  usuario:Object = {
    nombre: null,
    apellido: null,
    correo: null

  }

  constructor() { }

  ngOnInit() {
  }

  guardar( formulario: NgForm) {
    
    console.log("Guardando Formulario..")
    console.log(formulario)
  }

}
