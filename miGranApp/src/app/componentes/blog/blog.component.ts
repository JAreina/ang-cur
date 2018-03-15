import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogsService } from '../../servicios/blogs.service';
import { Router } from '@angular/router';


@Component({
  selector: 'juan-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {


  @ViewChild('formpro') formpro: NgForm;
  blog: any;


  constructor(private blogsService: BlogsService,
               private rutas: Router) {

    this.blog = {titulo: ''};
  }

  ngOnInit() {
  }
  enviarForm() {

   

    this.blog.titulo = this.formpro.value.titulo;
    
    console.log(this.blog);
    if (this.blog.titulo !== '') {
          this.blogsService.guardarBlog(this.blog);
          this.rutas.navigate(['/crearPost']);
    }
    this.formpro.reset();
  }
}
