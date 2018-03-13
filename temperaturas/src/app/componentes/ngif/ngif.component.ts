import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {
  capital : string;


  constructor() { }

  ngOnInit() {
  }
  getResultado() {
    return this.capital === 'Madrid' ? true : false;
  }

}
