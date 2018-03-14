import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-2',
  templateUrl: './ngif2.component.html',
  styleUrls: ['./ngif2.component.css']
})
export class Ngif2Component implements OnInit {
   capital = '';
   respuesta = 'responda a la pregunta';

  constructor() {
          }
  ngOnInit() {
  }
  mostrarAdvertencia() {
      if (this.capital === 'Madrid') {
           this.respuesta = 'correcto';
      } else {
        this.respuesta = 'no correcto';
      }
      if (this.capital === '') {
        this.respuesta = 'responda a la pregunta';
      }
  }

}
