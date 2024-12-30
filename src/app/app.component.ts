import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import {ProductListComponent} from './pages/product-list/product-list.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ProductListComponent],
  template: `
    <app-header/>
    <app-product-list/>

  `,
  styles: [],
  standalone: true
})
export class AppComponent {}
