import React from "react";
import PropTypes from 'prop-types';
import "./LibraryPage.css";
import BookSlot from "./BookSlot.js";
// import "./BookPage.js";

function LibraryPage({showLibrary, tog}){
    // console.log("From the librarypage ", showLibrary);
    return(
        <div>
            <div className="libraryPage-headers"><span>Title - </span><span>Author - </span><span>PageCount - </span><span>Have Read - </span></div>
            <ul className="LibraryPage-books">
                {showLibrary.map(book =>
                    <li key={book.id} className="LibraryPage-Book">
                        {<BookSlot id={book.id} title={book.title} author={book.author} pageCount={book.pageCount} haveRead={book.haveRead} tog={tog} /> }
                        {/* {console.log("From the map of showlibrary", book)} */}
                    </li>,
                )}
            </ul>
        </div>
    );
}

LibraryPage.propTypes = {
    showLibrary: PropTypes.array.isRequired
}

export default LibraryPage;