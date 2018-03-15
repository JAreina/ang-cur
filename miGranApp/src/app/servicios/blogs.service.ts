import { Injectable } from '@angular/core';

@Injectable()
export class BlogsService {





blogs: any[];

  constructor() {
    this.blogs = [];
  }


  guardarBlog(blog) {
        this.blogs.push(blog);
        console.log(this.blogs);
  }

}
