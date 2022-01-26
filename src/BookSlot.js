import React from "react";
import PropTypes from 'prop-types';
import "./BookSlot.css";
import "./BookPage.js";
import { library } from "./BookPage.js";

// () => {}
// () => ()
// () => { () }
// () => { return (); }
const Book = ({title, author, pageCount, haveRead}) => {
    
    console.log('yo rendering book', book, book.toggleHaveRead);
    return <div className="Book">
        <div className="Book-left">
            <div className="Book-properties">
                {book.title} - {book.author} - {book.pageCount} - Have Read?  {book.haveRead.toString()}
            </div>            
        </div>
        <div className="Book-right">
            <button className="have_read_button" text="Have Read" onClick={book.toggleHaveRead}>Have Read</button>
        </div>

    </div>;
};

// Book.PropTypes = {
//     book: PropTypes.object.isRequired,
//     haveReadToggle: PropTypes.func.isRequired
// };

export default Book;
