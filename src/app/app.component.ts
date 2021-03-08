import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';
  numPresses: number = 0;
  hidden: boolean = true;

  count() {
    this.numPresses++;
  }

  show() {
    this.hidden = !this.hidden;
  }
}
