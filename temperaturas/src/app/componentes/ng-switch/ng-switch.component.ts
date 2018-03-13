import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
  jugadores: any[] = [
    { nombre: 'Earvin "Magic" Jhonson', equipo: 'L.A. Lakers'},
    { nombre: 'Larry Bird', equipo: 'Boston Celtics'},
    { nombre: 'Michael Jordan', equipo: 'Chicago Bulls'},
    { nombre: 'Kareem Abdul-Jabbar', equipo: 'L.A. Lakers'}
    ];
  constructor() { }

  ngOnInit() {
  }

}
