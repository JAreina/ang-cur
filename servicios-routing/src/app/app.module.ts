import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* */ import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ProveedoresService } from './servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { MiServicioService } from './servicios/mi-servicio.service';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: '**', component: InicioComponent} /* Cambiar por 404 */
];

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProveedoresService, MiServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
