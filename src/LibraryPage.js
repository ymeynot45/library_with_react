import React from "react";
import PropTypes from 'prop-types';
import "./LibraryPage.css";

function BookPage({book}){
    return(
        <ul className="LibraryPage-books">
            {books.map(book =>
                <li key={book.id} className="LibraryPage-Book">
                    {book.name}
                </li>
            )}

        </ul>
    );
}

BookPage.propTypes = {
    books: PropTypes.array.isRequired
}

export default LibraryPage;