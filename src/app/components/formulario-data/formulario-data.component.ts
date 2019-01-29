import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-formulario-data',
  templateUrl: './formulario-data.component.html',
  styles: []
})
export class FormularioDataComponent implements OnInit {

  forma:FormGroup;

  constructor() { }

  ngOnInit() {
    this.forma = new FormGroup({
      nombre: new FormControl('Jose D'),
      apellido: new FormControl(),
      correo: new FormControl() 
    })
  }

  guardarCambios(){
    console.log(this.forma.value)
    console.log(this.forma)
  }

}
