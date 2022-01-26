import React from "react";
import PropTypes from 'prop-types';
import "./LibraryPage.css";
import Book from "./BookSlot.js";
// import "./BookPage.js";

function LibraryPage({books, tog}){
    console.log(books);
    return(
        <div>
            <div className="libraryPage-headers"><span>Title - </span><span>Author - </span><span>PageCount - </span><span>Have Read - </span></div>
            <ul className="LibraryPage-books">
                {books.map(book =>
                    <li key={book.id} className="LibraryPage-Book">
                        {<Book book={book} tog={tog} /* haveReadToggle={() => haveReadToggle(book)} (I don't know what this does or why it is here anymore*//> }
                    </li>
                )}
            </ul>
        </div>
    );
}

LibraryPage.propTypes = {
    books: PropTypes.array.isRequired
}

export default LibraryPage;