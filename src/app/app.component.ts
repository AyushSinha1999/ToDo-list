import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo App';
  list = [];


  add( data ) {
    this.list.push( data.value);
    data.value = ' ';
  }
  delete(data) {
    this.list = this.list.filter(el => {
      return el !== data;
    });
  }

}
