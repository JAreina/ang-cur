import { Injectable } from '@angular/core';

@Injectable()
export class UsuariosService {





usuarios: any[];

  constructor() {
    this.usuarios = [];
  }


  guardarUsuario(usuario) {
        this.usuarios.push(usuario);
        console.log(this.usuarios);


            const jsonn = JSON.stringify(this.usuarios);
        localStorage.setItem('usuariosArray' , jsonn);
  }

  recuperarUsuarios(): any {
           const arr = localStorage.getItem('usuariosArray');
        this.usuarios = JSON.parse(arr);
        console.log(this.usuarios);
      return this.usuarios;
      }

}
