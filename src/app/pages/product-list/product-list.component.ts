import {Component, signal} from '@angular/core';
import {Product} from '../../models/products.models';
import {ProductCardComponent} from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  imports: [
    ProductCardComponent
  ],
  template: `
    <div class="p-8 grid grid-cols-3 gap-4">
      @for (product of products(); track product.id) {
          <app-product-card [product]="product" />
      }
    </div>
  `,
  standalone: true,
  styles: ``
})
export class ProductListComponent {

  // Product list
  products = signal<Product[]>([]);

  // Request products from api
  async ngOnInit() {
    const res = await fetch('https://fakestoreapi.com/products/category/electronics');
    const data = await res.json();
    this.products.set(data);
  }



  // FAKE DATA FOR TESTING
  // products = signal<Product[]>([
  //   {
  //     id: 1,
  //     title: 'Product 1',
  //     price: 100.00,
  //     image: 'https://www.worten.pt/i/56a970c11cdc76d51f409582a110c16db5c54f29',
  //     stock: 10,
  //     },
  //   {
  //     id: 2,
  //     title: 'Product 2',
  //     price: 200.00,
  //     image: 'https://www.worten.pt/i/56a970c11cdc76d51f409582a110c16db5c54f29',
  //     stock: 10,
  //   },
  //   {
  //     id: 3,
  //     title: 'Product 3',
  //     price: 300.00,
  //     image: 'https://www.worten.pt/i/56a970c11cdc76d51f409582a110c16db5c54f29',
  //     stock : 10,
  //   },
  //   {
  //     id: 4,
  //     title: 'Product 4',
  //     price: 400.00,
  //     image: 'https://www.worten.pt/i/56a970c11cdc76d51f409582a110c16db5c54f29',
  //     stock: 10,
  //   },
  //   {
  //     id: 5,
  //     title: 'Product 5',
  //     price: 500.00,
  //     image: 'https://www.worten.pt/i/56a970c11cdc76d51f409582a110c16db5c54f29',
  //     stock: 10,
  //   }
  // ]);

}
