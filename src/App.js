import React, {useState} from "react";
import "./App.css";
// import {library} from "./Book.js";
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
      console.log(id);
      const newLibrary = [...library];
      let index = newLibrary.findIndex(x =>x.id === id);
      console.log("tog", id, index, 'before', library[index].haveRead);
      newLibrary[index].haveRead = !library[index].haveRead;
      console.log('  after', newLibrary[index].haveRead)
      setLibrary(newLibrary);
    }

    const addBookToLibrary = () => {
      console.log("ADDBOOK ", library)
      // alert("ADDBOOK");
      return
    }

  switch (tab){
    default:
    case 'library':
      return <LibraryPage showLibrary={library} tog={tog} reducer={reducer}/>  //FLAG
    case 'NewBookForm':
      return <AddBookPage onAddBook={library} addBook={addBookToLibrary}/>
  }
}

export default App;