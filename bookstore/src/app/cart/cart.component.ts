import { Component, OnInit } from '@angular/core';
import { CartBook } from '../models/cartBook';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart:CartBook[];

  constructor(private cartService:CartService) {
    this.cart=this.cartService.getCart();
   }

  ngOnInit(): void {
  }

}
