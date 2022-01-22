import React from "react";
import PropTypes from 'prop-types';
import "./BookPage.css";

function BookPage({book}){
    return(
        <ul className="BookPage-books">
            {books.map(book =>
                <li key={book.id} className="BookPage-Book">
                    {book.name}
                </li>
            )}

        </ul>
    );
}

BookPage.propTypes = {
    books: PropTypes.array.isRequired
}

export default BookPage;