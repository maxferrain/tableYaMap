import { Component } from '@angular/core';
import {Service} from './table-data/table-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service]
})
export class AppComponent {
  // title = 'untitled';
}
