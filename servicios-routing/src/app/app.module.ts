import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* */ import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProveedoresService } from './servicios/proveedores.service';
import { ProveedoresComponentt } from './proveedores-1/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { MiServicioService } from './servicios/mi-servicio.service';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { BorrarComponent } from './borrar/borrar.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'proveedores', component: ProveedoresComponentt },
  { path: 'borrar', component: BorrarComponent },
  { path: 'contacto/:id', component: ContactoComponent},
  { path: 'contacto/:id/:nombre', component: ContactoComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'proveedoresform', component: ProveedoresComponent},
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'addprovee', component: AddproveeComponent },
  { path: 'addpres', component: AddpresComponent},
  { path: '**', component: NotFoundComponent} /* Cambiar por 404 */
];

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponentt,
    InicioComponent,
    NotFoundComponent,
    HeaderComponent,
    BorrarComponent,
    ContactoComponent,
    AddpresComponent,
    ProveedoresComponent,
    AddproveeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [ProveedoresService, MiServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
