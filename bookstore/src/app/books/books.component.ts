import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:Book[];
  count:number;
  
  constructor(private bookService:BookService,
              private cartService:CartService,
              private router:Router) 
  {
    this.books = this.bookService.getBooks();
    this.count = this.cartService.getCart().length;
   }

  ngOnInit(): void {
  }
  like(id:any){
    this.bookService.incrementLike(id);
  }
  buy(id:any){
    var book = this.bookService.getBooksbyId(id);
    this.bookService.decrease(id);
    this.cartService.addToCart(book);
    console.log(this.cartService.getCart());
    this.count = this.cartService.getCart().length;
  }
  goToCart(){
    this.router.navigateByUrl("cart");
  }
}
