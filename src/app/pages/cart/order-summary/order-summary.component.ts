import {Component, computed, inject} from '@angular/core';
import {CartService} from '../../../services/cart.service';
import {PrimaryButtonComponent} from '../../../components/primary-button/primary-button.component';

@Component({
  selector: 'app-order-summary',
  imports: [
    PrimaryButtonComponent
  ],
  template: `
    <div class="bg-slate-100 p-6 rounded-xl shadow-xl border relative">
      <h2 class="text-2xl">Order Summary</h2>
      <div class="flex flex-col gap-4 mt-2">
        <span class="text-lg">Total</span>
        <span class="text-lg">{{total()}} €</span>
        <app-primary-button label="Checkout" [disabled]="isCheckoutAvailable()" />
      </div>
    </div>
  `,
  standalone: true,
  styles: ``
})
export class OrderSummaryComponent {

  cartService = inject(CartService);
  total = computed(() => {
    let total = 0;
    for(const item of this.cartService.cart()){
      total += item.price;
    }
    return total;
  })

  isCheckoutAvailable = computed(() => this.total() <= 0);


}
