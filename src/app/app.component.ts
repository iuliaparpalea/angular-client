import { Component } from '@angular/core';

declare const APPLICATION_NAME: string;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = APPLICATION_NAME;
}
