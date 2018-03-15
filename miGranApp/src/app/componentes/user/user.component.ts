import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'juan-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  usuarioForm: FormGroup;
  usuario: any;

  provincias: string[] = [ 'Álava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Ávila', 'Badajoz',
     'Barcelona', 'Burgos', 'Cáceres', 'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real', 'Córdoba',
     'La Coruña', 'Cuenca', 'Gerona', 'Granada', 'Guadalajara', 'Guipúzcoa', 'Huelva', 'Huesca',
     'IslasBaleares', 'Jaén', 'León', 'Lérida', 'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra', 'Orense',
     'Palencia', 'Las Palmas', 'Pontevedra', 'La Rioja', 'Salamanca', 'Segovia', 'Sevilla', 'Soria',
     'Tarragona', 'Santa Cruz de Tenerife', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya',
     'Zamora', 'Zaragoza' ];

     
  constructor(private pf: FormBuilder, private usuarioService: UsuariosService) {
    this.crearFormulario();
  }

  ngOnInit() {
  }


   crearFormulario() {
         this.usuarioForm = this.pf.group({
           nombre: ['',  Validators.compose([Validators.required ]) ],
           correo:  ['', Validators.email],
           provincia: ['', Validators.required ],
         });
   }

   registrar() {
     this.usuario = this.crearUsuario();
   }

 get nombre() {
   return this.usuarioForm.get('nombre');
 }
   get  correo() {
    return  this.usuarioForm.get('correo');

}

   crearUsuario() {
     let usu = null;
     if (this.usuarioForm.status === 'INVALID') {
              console.log('no puede estar vacio');
     } else {
        usu = {
        nombre: this.usuarioForm.get('nombre').value,
        correo: this.usuarioForm.get('correo').value,
        provincia: this.usuarioForm.get('provincia').value
      };

      this.usuarioService.guardarUsuario(usu);
      return usu;
     }
   }


   reset() {

   }

}
