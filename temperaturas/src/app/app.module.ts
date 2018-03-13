import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TemperaturasComponent } from './vistas/temperaturas/temperaturas.component';


@NgModule({
  declarations: [
    AppComponent,
    TemperaturasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
