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

}
