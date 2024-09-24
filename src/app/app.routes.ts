import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    title: 'My Store',
  },
  {
    path: 'products/:productId',
    component: ProductDetailsComponent,
    title: 'Product',
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'My Cart',
  },
  {
    path: 'shipping',
    component: ShippingComponent,
    title: 'Shipping'
  }
];
