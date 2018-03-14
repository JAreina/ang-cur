import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-pipe',
  templateUrl: './mi-pipe.component.html',
  styleUrls: ['./mi-pipe.component.css']
})
export class MiPipeComponent implements OnInit {
  title = 'Angular 4 Project!';
  todaydate: any = new Date();
  jsonval = {name: 'Rox', age: '25', address: {a1: 'Mumbai', a2: 'Karnataka'}};
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',
            'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  importe: Number = 1.23;
  constructor() { }

  ngOnInit() {
  }

}
