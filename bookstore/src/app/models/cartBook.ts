import { Book } from "./book";

export class CartBook{
    public book:Book;
    public quantity:number;
    
    constructor() {
       this.book = new Book;
       this.quantity = 0;
    }       
    }