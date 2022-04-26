import { Book } from "../models/book";

export class BookService{
  books:Book[];

  constructor() {
     this.books = [
         new Book(101,"THE SOUND AND THE FUR","William Faulkner",10,"assets/images/B1.jpg",0,5),
         new Book(102,"THE SECRET OF THE OLD COCK","Carolyn Keene",8,"assets/images/B2.jpg",0,4),
         new Book(103,"Charlie and the Chocolate Factory","Quentin Blake",12,"assets/images/B3.jpg",0,4),
         new Book(104,"Jurassic Ark","Michale Crichton",13,"assets/images/B4.jpg",0,3),
         new Book(105,"Land Without Thunder","Grace Ogot",9,"assets/images/B5.jpg",0,2)
     ] 
  }
  public addBooks(book:Book){
      this.books.push(book);
  }
  public getBooks(){
      return this.books;
  }
  public getBooksbyId(id:number){
      var book;
      for (let index = 0; index < this.books.length; index++) {
          if(this.books[index].id==id)
           book= this.books[index];  
      }
      return book;  
  }
  public incrementLike(id:number){
    for (let index = 0; index < this.books.length; index++){
        if(this.books[index].id==id)
        {
            this.books[index].likes=(this.books[index].likes??0)+1;
            break;
        }
    }
}
    public decrease(id:number)
    {
        var book;
        for (let index = 0; index < this.books.length; index++){
            if(this.books[index].id==id)
            {
                this.books[index].qty=(this.books[index].qty??0)-1;
            }
    }
    return book;
    }
}