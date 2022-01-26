import React from "react";
import PropTypes from 'prop-types';
import "./BookSlot.css";


// () => {}
// () => ()
// () => { () }
// () => { return (); }
const BookSlot = ({id, title, author, pageCount, haveRead, tog}) => {
    // console.log("this is the title in the bookslot ", title)

    // console.log('yo rendering book', BookSlot);
    return <div className="Book">
        <div className="Book-left">
            <div className="Book-properties">
                {id} - {title} - {author} - {pageCount} - Have Read?  {haveRead.toString()}
            </div>            
        </div>
        <div className="Book-right">
            <button className="have_read_button" onClick={tog}>Have Read</button>
        </div>

    </div>;
};

// BookSlot.PropTypes = {
//     book: PropTypes.object.isRequired,
//     tog: PropTypes.func.isRequired
// };

export default BookSlot;
