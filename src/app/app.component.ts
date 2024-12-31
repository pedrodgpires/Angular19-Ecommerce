import {Component} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  template: `
    <app-header/>
    <router-outlet />
  `,
  styles: [],
  standalone: true
})
export class AppComponent {}
