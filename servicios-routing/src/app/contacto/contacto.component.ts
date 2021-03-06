import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

    public titulo = 'Contactos';
    public parametro = '';
    public parametro2 = '';

  /* Inyectamos en el constructor los objetos/servicios para recoger los
    parámetros de la URL */
  constructor(
    private ruta: ActivatedRoute,
    private router: Router
  ) {}

  /* Función callback para recorrer los parámetros de las URLs
     mediante el método 'forEach' del router */
  ngOnInit() {
    /* Función de flecha para poder acceder globalmente a los parámetros
       dentro de la función de callback */
    this.ruta.params.forEach((params: Params) => {
        this.parametro = params['id'];
        if (params['nombre']) {
          this.parametro2 = params['nombre'];
        }
    });
    console.log(this.ruta.params);
  }

  /* Redirijimos a través del método 'navigate' del router */
  redirect() {

    if ( !this.parametro && !this.parametro2 ) {
     console.log('NO HAY PARAMETROS EN LA URL');
    }
    if ( this.parametro && this.parametro2 ) {
      this.router.navigate(['/contacto', this.parametro, this.parametro2]);
    } else if (this.parametro && !this.parametro2) {
      this.router.navigate(['/contacto', this.parametro]);
    }
  }
}
