import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Pokedex', url: '/pokedex', icon: 'list' },
    { title: 'Pokedex1', url: '/pokedex', icon: 'list' },
  ];
  constructor() {}
}
