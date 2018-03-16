import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ProveedoresService {

  prosURL = 'https://presu-f23d5.firebaseio.com/prov.json';
  proURL = 'https://presu-f23d5.firebaseio.com/prov';
  proveedores: any = [];

  /*[
    {
      nombre: 'Telefónica',
      cif: 'B12345678',
      direccion: 'Paseo de la Castellana, 100',
      cp: '28.010',
      localidad: 'Madrid',
      provincia: 'Madrid',
      telefono: 911111111,
      email: 'info@telefonica.com',
      contacto: 'Juan Pérez'
    },
    {
      nombre: 'Iberdrola',
      cif: 'B87654321',
      direccion: 'Príncipe de Vergara, 200',
      cp: '28.015',
      localidad: 'Madrid',
      provincia: 'Madrid',
      telefono: 922222222,
      email: 'info@iberdrola.com',
      contacto: 'Laura Martínez'
    }
  ];*/

  constructor(private _http: Http) { }


  guardarProveedor(proveedor: any) {
       const nuevo = JSON.stringify(proveedor);
       const headers = new Headers({
        'Content-Type': 'application/json'
       });

       return this._http.post(this.prosURL, nuevo, {headers})
       .map( res => {
        console.log(res.json());
        return res.json();
      });
  }

  getProveedores () {
    return this._http.get( this.prosURL )
    .map(
      res => res.json()
    );
  }

}
