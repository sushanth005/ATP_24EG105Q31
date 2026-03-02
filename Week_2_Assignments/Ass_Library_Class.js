//Library Management System
//Objective : Create a Book class and use it to manage a collection of books in a library.

class Book{
    title;
    author;
    pages;
    isAvailable;

    constructor(title, author, pages, isAvailable)
    {
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.isAvailable=isAvailable;
    }

    borrow(isAvailable){
        if(!isAvailable){
            console.log("Not available")
        }
        else{
            isAvailable === 'false'
        }
    }
    returnBook(isAvailable){
        if(isAvailable){
            console.log("Already there")
        }
        else{
            isAvailable === 'true'
        }
    }
    getInfo(){
        console.log("title: ", this.title)
        console.log("author: ", this.author)
        console.log("pages: ", this.pages)
        console.log("isAvailable: ", this.isAvailable)
    }
    isLongBook(){
        if(this.pages>300)
        {
            console.log("This is a long book")
            return true
        }
        else{
            console.log("This is not a long book")
            return false
        }
    }
}

const b1 = new Book('Harry Potter', 'John Grishm', 200, true)
const b2 = new Book('1984', 'John Dalton', 301, true)
const b3 = new Book('The Hobbit', 'Jeffry Epstein', 299, false)
const b4 = new Book('Rocket Science', 'Abdul Kalam', 400, true)

b1.getInfo()
b2.getInfo()
b3.getInfo()
b4.getInfo()

b1.borrow()
b4.borrow()

b1.returnBook()

b2.isLongBook()
b4.isLongBook()