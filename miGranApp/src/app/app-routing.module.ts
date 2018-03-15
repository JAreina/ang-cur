import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { UserComponent } from './componentes/user/user.component';
import { BlogComponent } from './componentes/blog/blog.component';
import { PostsComponent } from './componentes/blog/posts/posts.component';

const routes: Routes = [

  { path: '', component: InicioComponent },

  { path: 'crearCuenta', component: UserComponent},
  { path: 'crearBlog', component: BlogComponent},
  { path: 'crearPost', component: PostsComponent},
  { path: '**', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
