import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejpropertybinding',
  templateUrl: './ejpropertybinding.component.html',
  styleUrls: ['./ejpropertybinding.component.css']
})
export class EjpropertybindingComponent implements OnInit {

  texto = '';

  constructor() {
    setTimeout(() => {
      this.texto = 'TEXTO DESDE CLASE '; }, 1000);
    }

  ngOnInit() {
  }

}
