import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { UnoComponent } from './componentes/uno/uno.component';
import { NuevoComponent } from './componentes/nuevo_componente/nuevo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ // las clases que creamos
    AppComponent,
    UnoComponent,
    NuevoComponent
  ],
  imports: [ // clases predefinidas de angular
    BrowserModule,
    FormsModule
  ],
  providers: [],  // se añadiran clases referentes a servicios
  bootstrap: [AppComponent] // la clase que lanza la aplicacion
})
export class AppModule { }
