import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// tslint:disable-next-line:import-blacklist
import {Observable} from 'rxjs/Rx';
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

   contador = 10;

  constructor(private rutas: Router, private app: AppComponent) {
    this.app.mostrar = false;
    Observable.interval(1000).subscribe(() => {
      this.redirigir();
    });
   }


   redirigir() {
     for ( let i = this.contador; i >= 0 ; i-- ) {
           this.contador--;
            if ( this.contador === 0) {
              this.app.mostrar = true;
              this.rutas.navigate(['']);
            }
            return this.contador;
     }
   }

   ir() {
    this.app.mostrar = true;
    this.rutas.navigate(['']);
   }
  ngOnInit() {
  }

}
