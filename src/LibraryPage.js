import React from "react";
import PropTypes from 'prop-types';
import "./LibraryPage.css";

function LibraryPage({books}){
    console.log(books);
    return(
        <ul className="LibraryPage-books">
            {books.map(book =>
                <li key={book.id} className="LibraryPage-Book">
                    {book.title} - {book.author} - {book.pageCount} - Have Read?  {book.haveRead.toString()}
                </li>
            )}
        </ul>
    );
}

LibraryPage.propTypes = {
    books: PropTypes.array.isRequired
}

export default LibraryPage;