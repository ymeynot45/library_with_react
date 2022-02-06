import React from "react";
import PropTypes from 'prop-types';
import "./BookSlot.css";



const BookSlot = ({slot, title, author, pageCount, haveRead, toggleHaveRead, deleteBook}) => {
  let colorCoding = (slot%2 === 0 ? 'even' : 'odd');    
    return <div className="Book" id={slot+title} className={colorCoding}>
      <div className="Book-left">
          <div className="Book-properties">
              <span className="1col">{slot} - {title}</span><span className="2col">{author}</span><span className="3col" id="third-col">{pageCount}</span><span className="4col" id="fourth-col">{haveRead.toString()}</span>
          </div>            
      </div>
      <div className="Book-right">
          <button className="have_read_button" onClick={() => toggleHaveRead(slot)}>Have Read</button>
          <button className="deleteBook_button" onClick={() => deleteBook(slot)}>Delete Book</button>
      </div>
    </div>;
};

BookSlot.propTypes = {
    deleteBook: PropTypes.func.isRequired,
    toggleHaveRead: PropTypes.func.isRequired,
    slot: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    pageCount: PropTypes.number.isRequired,
    haveRead: PropTypes.bool.isRequired,
};

export default BookSlot;
