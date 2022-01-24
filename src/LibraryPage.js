import React from "react";
import PropTypes from 'prop-types';
import "./LibraryPage.css";
import Book from "./Book.js";
// import "./BookPage.js";

function LibraryPage({books, haveReadToggle}){
    console.log(books);
    return(
        <ul className="LibraryPage-books">
            {books.map(book =>
                <li key={book.id} className="LibraryPage-Book">
                    <Book book={book} haveReadToggle={() => haveReadToggle(book)} />
                </li>
            )}
        </ul>
    );
}

LibraryPage.propTypes = {
    books: PropTypes.array.isRequired
}

export default LibraryPage;