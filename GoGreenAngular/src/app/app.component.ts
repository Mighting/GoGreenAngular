import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GoGreenAngular';
  model = {
    left: true,
    middle: false,
    right: false
  };
}
