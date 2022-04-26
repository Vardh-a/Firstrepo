import { Book } from "../models/book";
import { CartBook } from "../models/cartBook";

export class CartService{
itemsInCart:CartBook[];

    constructor() {
    this.itemsInCart = [];  
    }
    public getCart(){
        return this.itemsInCart;
    }
    public addToCart(book:any){
        var flag=0;
     for (let index = 0; index < this.itemsInCart.length; index++) {
        if(book.id== this.itemsInCart[index].book.id)
        {
            flag=1;
            this.itemsInCart[index].quantity +=1;
            break;
        } 
     }
     if(flag==0)
     {
         var cartItem = new CartBook();
         cartItem.book = book;
         cartItem.quantity = 1;
         this.itemsInCart.push(cartItem);
     }
    }
}
   