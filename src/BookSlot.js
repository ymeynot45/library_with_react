import React from "react";
import PropTypes from 'prop-types';
import "./BookSlot.css";


// () => {}
// () => ()
// () => { () }
// () => { return (); }
const BookSlot = ({id, title, author, pageCount, haveRead, tog}) => {
    return <div className="Book" id={id+title} >
        <div className="Book-left">
            <div className="Book-properties">
                {id} - {title} - {author} - {pageCount} - Have Read?  {haveRead.toString()}
            </div>            
        </div>
        <div className="Book-right">
            <button className="have_read_button" onClick={() => tog(id)}>Have Read</button>
        </div>

    </div>;
};

// BookSlot.PropTypes = {
//     book: PropTypes.object.isRequired,
//     tog: PropTypes.func.isRequired
// };

export default BookSlot;
