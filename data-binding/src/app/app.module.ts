import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';



import { EjeventbindingComponent } from './ejeventbinding/ejeventbinding.component';

@NgModule({
  declarations: [
    AppComponent,
   
    EjeventbindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
