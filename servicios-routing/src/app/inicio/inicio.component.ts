import { Component, OnInit } from '@angular/core';
import { MiServicioService } from '../servicios/mi-servicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private miServicio: MiServicioService) {

        this.miServicio.diHola();
   }

  ngOnInit() {
  }

}
