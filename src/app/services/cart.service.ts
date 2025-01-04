import {Injectable, signal} from '@angular/core';
import {Product} from '../models/products.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);

  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]);
  }

  removeFromCart(product: Product) {
    const updatedCart = this.cart().filter(p => p.id !== product.id);
    this.cart.set(updatedCart);

  }

  constructor() { }
}
