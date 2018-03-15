import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { UserComponent } from './componentes/user/user.component';
import { BlogComponent } from './componentes/blog/blog.component';
import { PostsComponent } from './componentes/blog/posts/posts.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UsuariosService } from './servicios/usuarios.service';
import { BlogsService } from './servicios/blogs.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserComponent,
    BlogComponent,
    PostsComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, ReactiveFormsModule
  ],
  providers: [UsuariosService,BlogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
