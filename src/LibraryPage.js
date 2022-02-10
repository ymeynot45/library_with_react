import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import './LibraryPage.css'
import BookSlot from './BookSlot.js'

function LibraryPage ({ showLibrary, toggleHaveRead, reducer, deleteBook }) {
  const [, dispatch] = useReducer(reducer, showLibrary)
  return (
    <div>
      <div className="libraryPage-headers">
      <div className="libraryPage-buttons" ><button id="button1" onClick={() => dispatch({ type: 'Title' })}> Title </button><button id="button2" onClick={() => dispatch({ type: 'Author' })}> Author </button><button id="button3" onClick={() => dispatch({ type: 'Page Count' })}> PageCount </button><button id="button4" onClick={() => dispatch({ type: 'Have Read' })}> Have Read </button></div>
      </div>
        <ul className="LibraryPage-books">
        {showLibrary.map(book =>
          <li key={book.id} className="LibraryPage-Book">
            {<BookSlot slot={book.id} title={book.title} author={book.author} pageCount={book.pageCount} haveRead={book.haveRead} toggleHaveRead={toggleHaveRead} deleteBook={deleteBook}/> }
          </li>
        )}
      </ul>
    </div>
  )
}

LibraryPage.propTypes = {
  showLibrary: PropTypes.array.isRequired,
  toggleHaveRead: PropTypes.func.isRequired,
  deleteBook: PropTypes.func.isRequired,
  reducer: PropTypes.func.isRequired
}

export default LibraryPage
