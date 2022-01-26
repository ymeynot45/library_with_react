import React from "react";
import PropTypes, { func } from 'prop-types';

// let Book = function (title, author, pageNumber, haveRead) {
    // this.title = title;
    // this.author = author;
    // this.pageNumber = pageNumber;
    // this.haveRead = haveRead;

//     this.toggleHaveRead = function() {
//         this.haveRead = !this.haveRead;
//         return this.haveRead
//     }
    
//     return this;
// }

// const addBookToLibrary = function(library, newBook) {
//     addIdToBook(newBook);
//     library = library.push(newBook);
//     findNextId();
//     return library;
// }
// const addIdToBook = function(newbook) {
//     let nextBookId = findNextId();
//     newbook['id'] = nextBookId;
//     return newbook
// }

// const findNextId = function() {
//     let nextId = Math.max(...library.map(book => book.id));
//     if(nextId < 1){
//         nextId = 1
//     }
//     else{
//         ++nextId
//     }
//     return nextId;
// }



// let library = [
//     {
//         id: 1,
//         title: "The Hobbit",
//         author: "J.R.R. Tolkien",
//         pageCount: 295,
//         haveRead: false

//     },
//     {
//         id: 2,
//         title: "Flight from the Dark",
//         author: "Joe Denver",
//         pageCount: 300,
//         haveRead: true

//     },
//     {
//         id: 3,
//         title: "Fire on the Water",
//         author: "Gary Chalk",
//         pageCount: 350,
//         haveRead: false

//     }
// ];



// addBookToLibrary(library, new Book("The Hobbit", "J.R.R. Tolkien", 295, false));
// addBookToLibrary(library, new Book("Flight from the Dark", "Joe Denver", 300, true));
// addBookToLibrary(library, new Book("Fire on the Water", "Gary Chalk", 350, false));


// export {library};
