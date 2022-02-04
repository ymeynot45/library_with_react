import React, {useState} from "react";
import "./App.css";
import Nav from "./Nav.js";
import LibraryPage from "./LibraryPage.js";
import AddBookPage from "./AddBookPage.js";

const App = () => {
  const [activeTab, setActiveTab] = useState('library');

  return(
    <div className='App'>
      <Nav 
          activeTab={activeTab}
          onTabChange={setActiveTab}
      />
      <main className="App-content">
        <Content tab={activeTab}/>
      </main>
    </div>
  )
  };

  let Content = ({tab}) => {
    const Book = function (title, author, pageCount, haveRead) {
      this.title = title;
      this.author = author;
      this.pageCount = pageCount;
      this.haveRead = haveRead;
      return this
    }

    const seeding = () =>{  //where do I run this? So it doesn't run an endless render loop.
    addBookToLibrary(library, new Book("The Hobbit", "J.R.R. Tolkien", 295, false));
    addBookToLibrary(library, new Book("Flight from the Dark", "Joe Denver", 300, true));
    addBookToLibrary(library, new Book("Fire on the Water", "Gary Chalk", 350, false));
    }

    let [library, setLibrary] = useState([
      {
          id: 1,
          title: "The Hobbit",  //3
          author: "J.R.R. Tolkien",  //2
          pageCount: 250,  //1
          haveRead: false

      },
      {
          id: 2,
          title: "Flight from the Dark", //2
          author: "Gary Chalk",  //1
          pageCount: 400,  //3
          haveRead: true

      },
      {
          id: 3,
          title: "Fire on the Water",  //1
          author: "Joe Denver",  //3
          pageCount: 300,  //2
          haveRead: false

      }
    ]);
        
    const reducer = (library, action) => {
      let comp = (field) => {
        return (aItem, bItem) => {
          let [a, b] = [aItem[field], bItem[field]];
          if (typeof(a) === 'string') { a = a.toUpperCase(); }
          if (typeof(b) === 'string') { b = b.toUpperCase(); }
          if (a < b) {
            return -1;
          } else if (a > b) {
            return 1;
          } else {
            return 0
          }
        }
      }
      let field = {  //can refactor again if I just lowercase the type on the LibraryPage.
        'Title': 'title',
        'Author': 'author',
        'Page Count': 'pageCount',
        'Have Read': 'haveRead',
      }[action.type];
      library = library.slice(0).sort(comp(field));
      setLibrary(library);
      return library;
    }

    const tog = (id) => {
      const newLibrary = [...library];
      let index = newLibrary.findIndex(x =>x.id === id);
      newLibrary[index].haveRead = !library[index].haveRead;
      setLibrary(newLibrary);
    }

    const deleteBook = (id) => {
      const newLibrary = [...library];
      let index = newLibrary.findIndex(x =>x.id === id);
      newLibrary.splice([index],1);
      setLibrary(newLibrary);
    }

    let dataRetrieval = (formData) => {
      // console.log("app.js formdata" , formData);
      let formProps = formData;
      let book = new Book(formProps.title, formProps.author, formProps.pageCount, formProps.haveRead);
      if (book.haveRead === undefined){
        book.haveRead = false;
      }
      console.log("library" , library);
      addBookToLibrary(library, book);
    }

    const addBookToLibrary = function(library, newBook) {
      addIdToBook(newBook);
      const newLibrary = [...library, newBook];
      setLibrary(newLibrary);
      findNextId();
      return library
    }

    const addIdToBook = function(newBook) {
      let nextBookId = findNextId()
      newBook['id'] = nextBookId
      return newBook
    }

    const findNextId = function() {
      let nextId = Math.max(...library.map(book => book.id));
      if(nextId < 1){
          nextId = 1
      }
      else{
          ++nextId
      }
      return nextId
  }

  switch (tab){
    default:
    case 'library':
      return <LibraryPage showLibrary={library} tog={tog} reducer={reducer} deleteBook={deleteBook}/>  //FLAG
    case 'NewBookForm':
      console.log("app page", typeof dataRetrieval)
      return <AddBookPage onAddBook={library} addBook={addBookToLibrary} dataRetrieval={dataRetrieval}/>
  }
}




export default App;