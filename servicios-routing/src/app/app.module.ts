import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* */ import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProveedoresService } from './servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { MiServicioService } from './servicios/mi-servicio.service';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { BorrarComponent } from './borrar/borrar.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'borrar', component: BorrarComponent },
  { path: 'contacto/:id', component: ContactoComponent},
  { path: 'contacto/:id/:nombre', component: ContactoComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: '**', component: NotFoundComponent} /* Cambiar por 404 */
];

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    NotFoundComponent,
    HeaderComponent,
    BorrarComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProveedoresService, MiServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
