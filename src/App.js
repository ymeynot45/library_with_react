import React, { useState } from 'react'
import './App.css'
import Nav from './Nav.js'
import LibraryPage from './LibraryPage.js'
import AddBookPage from './AddBookPage.js'

const App = () => {
  const [activeTab, setActiveTab] = useState('library')

  return (
    <div className='App'>
      <Nav
          activeTab={activeTab}
          onTabChange={setActiveTab}
      />
      <main className='App-content'>
        <Content tab={activeTab}/>
      </main>
    </div>
  )
  }

  const Content = ({ tab }) => {
    const Book = function (title, author, pageCount, haveRead) {
      this.title = title
      this.author = author
      this.pageCount = pageCount
      this.haveRead = haveRead
      return this
    }

  const [library, setLibrary] = useState([
    {
      id: 1,
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      pageCount: 250,
      haveRead: false

    },
    {
      id: 2,
      title: 'Flight from the Dark',
      author: 'Gary Chalk',
      pageCount: 400,
      haveRead: true

    },
    {
      id: 3,
      title: 'Fire on the Water',
      author: 'Joe Denver',
      pageCount: 300,
      haveRead: false

    }
  ])

  const reducer = (library, action) => {
    const comp = (field) => {
      return (aItem, bItem) => {
        let [a, b] = [aItem[field], bItem[field]]
        if (typeof (a) === 'string') { a = a.toUpperCase() }
        if (typeof (b) === 'string') { b = b.toUpperCase() }
        if (a < b) {
          return -1
        } else if (a > b) {
          return 1
        } else {
          return 0
        }
      }
    }
    const field = {
      Title: 'title',
      Author: 'author',
      'Page Count': 'pageCount',
      'Have Read': 'haveRead'
    }[action.type]
    library = library.slice(0).sort(comp(field))
    setLibrary(library)
    return library
  }

  const toggleHaveRead = (id) => {
    const newLibrary = [...library]
    const index = newLibrary.findIndex(x => x.id === id)
    newLibrary[index].haveRead = !library[index].haveRead
    setLibrary(newLibrary)
  }

  const deleteBook = (id) => {
    const newLibrary = [...library]
    const index = newLibrary.findIndex(x => x.id === id)
    newLibrary.splice([index], 1)
    setLibrary(newLibrary)
  }

  const dataRetrieval = (formData) => {
    const formProps = formData
    const book = new Book(formProps.title, formProps.author, parseInt(formProps.pageCount), formProps.haveRead)
    if (book.haveRead === undefined) {
      book.haveRead = false
    }
    addBookToLibrary(library, book)
  }

  const addBookToLibrary = function (library, newBook) {
    addIdToBook(newBook)
    const newLibrary = [...library, newBook]
    setLibrary(newLibrary)
    findNextId()
    return library
  }

  const addIdToBook = function (newBook) {
    const nextBookId = findNextId()
    newBook.id = nextBookId
    return newBook
  }

  const findNextId = function () {
    let nextId = Math.max(...library.map(book => book.id))
    if (nextId < 1) {
      nextId = 1
    } else {
      ++nextId
    }
    return nextId
  }

  switch (tab) {
    case 'library':
      return <LibraryPage showLibrary={library} toggleHaveRead={toggleHaveRead} reducer={reducer} deleteBook={deleteBook}/>
    case 'NewBookForm':
      return <AddBookPage dataRetrieval={dataRetrieval}/>
    default:
  }
}

export default App
