import React, { useReducer } from "react";
import PropTypes from 'prop-types';
import "./LibraryPage.css";
import BookSlot from "./BookSlot.js";

function LibraryPage({showLibrary, toggleHaveRead, reducer, deleteBook}){
    const [state, dispatch] = useReducer(reducer, showLibrary); 
    return(
        <div>
            <div className="libraryPage-headers"><button onClick={() => dispatch({type: 'Title'})}> Title </button><button onClick={() => dispatch({type: 'Author'})}> Author </button><button onClick={() => dispatch({type: 'Page Count'})}> PageCount </button><button onClick={() => dispatch({type: 'Have Read'})}> Have Read </button></div>
            <ul className="LibraryPage-books">
                {showLibrary.map(book =>
                    <li key={book.id} className="LibraryPage-Book">
                        {<BookSlot id={book.id} title={book.title} author={book.author} pageCount={book.pageCount} haveRead={book.haveRead} toggleHaveRead={toggleHaveRead} deleteBook={deleteBook}/> }
                    </li>,
                )}
            </ul>
        </div>
    );
}

LibraryPage.propTypes = {
    showLibrary: PropTypes.array.isRequired,
    toggleHaveRead: PropTypes.func.isRequired,
    deleteBook: PropTypes.func.isRequired,
    reducer: PropTypes.func.isRequired,
}

export default LibraryPage;