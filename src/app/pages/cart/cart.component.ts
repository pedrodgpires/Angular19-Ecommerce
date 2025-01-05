import {Component, computed, inject} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {PrimaryButtonComponent} from '../../components/primary-button/primary-button.component';
import {CartItemComponent} from './cart-item/cart-item.component';
import {OrderSummaryComponent} from './order-summary/order-summary.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [
    PrimaryButtonComponent,
    CartItemComponent,
    OrderSummaryComponent,
    NgIf
  ],
  template: `
    <div class="flex">
      <h2 class="text-2xl p-6">
        Your Current Cart:
      </h2>
      <div class="flex-1 p-6">
        <div class="flex flex-col gap-4">
          <div class="bg-slate-100 p-6 rounded-xl shadow-xl border" *ngIf="isEmpty()">
            <span>Empty</span>
          </div>
          @for (item of cartService.cart(); track item.id){
            <app-cart-item [cartItem]="item" />
          }
      </div>
      </div>
      <div class="w-1/3 p-6">
        <app-order-summary />
      </div>
    </div>

  `,
  standalone: true,
  styles: ``
})
export class CartComponent {

  cartService = inject(CartService);

  isEmpty = computed(() => this.cartService.cart().length <= 0);

}
