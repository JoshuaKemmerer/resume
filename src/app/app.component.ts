import { Component } from '@angular/core';
import { DataUris } from './icons/img-src-data-uris';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Joshua Kemmerer';
  imgDataUris = DataUris;
}
