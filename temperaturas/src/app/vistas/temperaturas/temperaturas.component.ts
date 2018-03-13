import { Component, OnInit } from '@angular/core';
import { Temperatura } from '../../modelos/temperaturas.modelo';



@Component({
  selector: 'app-temperaturas',
  templateUrl: './temperaturas.component.html',
  styleUrls: ['./temperaturas.component.css']
})
export class TemperaturasComponent implements OnInit {
    temperatura1: Temperatura;
    temperatura2: Temperatura;
    temperatura3: Temperatura;
    arrTemp: Temperatura[];

       titulo = '';

  constructor() {
  }
  ngOnInit() {
    this.temperatura1 = new Temperatura('1', new Date().getFullYear(), 25, 'Madrid');
    this.temperatura2 = new Temperatura('2', new Date().getFullYear(), 26, 'Cádiz');
    this.temperatura3 = new Temperatura('3', new Date().getFullYear(), 29, 'Barcelona');
    this.arrTemp = [];
    this.arrTemp.push(this.temperatura1);
    this.arrTemp.push(this.temperatura2);
    this.arrTemp.push(this.temperatura3);
  }

  metodo() {
     this.titulo = 'Tabla de temperaturas medias anuales.';
  }
}
