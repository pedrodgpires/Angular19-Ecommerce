import {Component} from '@angular/core';
import {PrimaryButtonComponent} from '../primary-button/primary-button.component';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
      <span class="text-xl">My Store</span>
      <app-primary-button label="Cart" (btnClicked)="showCart()" />
    </div>
  `,
  standalone: true,
  styles: ``
})
export class HeaderComponent {

  showCart() {
    console.log('Show cart');
  }
}
