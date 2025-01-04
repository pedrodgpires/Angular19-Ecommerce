import {Component, inject} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {PrimaryButtonComponent} from '../../components/primary-button/primary-button.component';
import {CartItemComponent} from './cart-item/cart-item.component';
import {OrderSummaryComponent} from './order-summary/order-summary.component';

@Component({
  selector: 'app-cart',
  imports: [
    PrimaryButtonComponent,
    CartItemComponent,
    OrderSummaryComponent
  ],
  template: `
    <div class="p-6 flex flex-col gap-4">
      <h2 class="text-2xl">Shopping Cart</h2>
      @for (item of cartService.cart(); track item.id){
        <app-cart-item [cartItem]="item" />
      }
      <app-order-summary />
    </div>
  `,
  standalone: true,
  styles: ``
})
export class CartComponent {

  cartService = inject(CartService);

}
