import React from "react";
import PropTypes, { func } from 'prop-types';
import "./BookPage.css";

let Book = function (title, author, pageNumber, haveRead) {
    this.title = title;
    this.author = author;
    this.pageNumber = pageNumber;
    this.haveRead = haveRead;

    this.toggleHaveRead = function() {  //should I bind this function?
        if(this.haveRead === true ){
            this.haveRead = false;
        }else if(this.haveRead === false){
            this.haveRead = true;
        }
        return this.haveRead
    }
    
    return this
}




// const loadLibrary = function(library) {
//     let thirdShelf = document.createElement("ol");
//     thirdShelf.setAttribute(`id`, `thirdShelf`);
//     document.getElementById(`secondShelf`).appendChild(thirdShelf);
//     library.forEach(book => {
//         createBookSlot(book);
//     });
// }   




let library = [
    {
        id: 1,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pageCount: 295,
        haveRead: false

    },
    {
        id: 2,
        title: "Flight from the Dark",
        author: "Joe Denver",
        pageCount: 300,
        haveRead: true

    },
    {
        id: 3,
        title: "Fire on the Water",
        author: "Gary Chalk",
        pageCount: 350,
        haveRead: false

    }
];






export {library};
// addBookToLibrary(myLibrary, new Book("The Hobbit", "J.R.R. Tolkien", 295, false));
//     addBookToLibrary(myLibrary, new Book("Flight from the Dark", "Joe Denver", 300, true));
//     addBookToLibrary(myLibrary, new Book("Fire on the Water", "Gary Chalk", 350, false));