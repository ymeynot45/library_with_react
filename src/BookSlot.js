import React from "react";
import PropTypes from 'prop-types';
import "./BookSlot.css";


// () => {}
// () => ()
// () => { () }
// () => { return (); }
const BookSlot = ({id, title, author, pageCount, haveRead, toggleHaveRead, deleteBook}) => {
    return <div className="Book" id={id+title} >
        <div className="Book-left">
            <div className="Book-properties">
                {id} - {title} - {author} - {pageCount} - Have Read?  {haveRead.toString()}
            </div>            
        </div>
        <div className="Book-right">
            <button className="have_read_button" onClick={() => toggleHaveRead(id)}>Have Read</button>
            <button className="deleteBook_button" onClick={() => deleteBook(id)}>Delete Book</button>
        </div>

    </div>;
};

// BookSlot.PropTypes = {
//     book: PropTypes.object.isRequired,
//     toggleHaveRead: PropTypes.func.isRequired
// };

export default BookSlot;
