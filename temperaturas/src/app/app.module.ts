import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TemperaturasComponent } from './vistas/temperaturas/temperaturas.component';
import { NgifComponent } from './componentes/ngif/ngif.component';
import { NgforComponent } from './componentes/ngfor/ngfor.component';
import { NgStyleComponent } from './componentes/ng-style/ng-style.component';
import { NgClassComponent } from './componentes/ng-class/ng-class.component';
import { NgSwitchComponent } from './componentes/ng-switch/ng-switch.component';


@NgModule({
  declarations: [
    AppComponent,
    TemperaturasComponent,
    NgifComponent,
    NgforComponent,
    NgStyleComponent,
    NgClassComponent,
    NgSwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
