import React from "react";
import PropTypes from 'prop-types';
import "./Book.css";
import "./BookPage.js";
import { library } from "./BookPage.js";

const Book = ({book, haveReadToggle}) => (
    <div className="Book">
        <div className="Book-left">
            <div className="Book-properties">
                {book.title} - {book.author} - {book.pageCount} - Have Read?  {book.haveRead.toString()}
            </div>            
        </div>
        <div className="Book-right">
            <button className="have_read_button">{haveReadToggle}</button>
        </div>

    </div>
);

 const haveReadToggle = () => {

};

// Book.PropTypes = {
//     book: PropTypes.object.isRequired,
//     haveReadToggle: PropTypes.func.isRequired,
// };

export default Book;
