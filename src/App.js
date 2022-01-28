import React, {useState, useReducer} from "react";
import "./App.css";
// import {library} from "./Book.js";
import Nav from "./Nav.js";
import LibraryPage from "./LibraryPage.js";
import BookForm from "./AddBookPage.js";


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
      // let compare = function(a, b, item){
      //   let itemA = a[item];
      //   let itemB = b[item];
    
      //   let comparison = 0;
      //   if (itemA > itemB){
      //       comparison = 1;
      //   } else if (itemA < itemB){
      //       comparison = -1
      //   }
      //   return comparison;

      let compareTitle = function(a, b){
        let itemA = a.title.toUpperCase();
        let itemB = b.title.toUpperCase();
    
        let comparison = 0;
        if (itemA > itemB){
            comparison = 1;
        } else if (itemA < itemB){
            comparison = -1
        }
        return comparison;
      }

      let compareAuthor = function(a, b){
        let itemC = a.author.toUpperCase();
        let itemD = b.author.toUpperCase();
    
        let comparison = 0;
        if (itemC > itemD){
            comparison = 1;
        } else if (itemC < itemD){
            comparison = -1
        }
        return comparison;
      }

      let comparePageCount = function(a, b){
        let itemE = a.pageCount;
        let itemF = b.pageCount;
    
        let comparison = 0;
        if (itemE > itemF){
            comparison = 1;
        } else if (itemE < itemF){
            comparison = -1
        }
        return comparison;
      }

      let compareHaveRead = function(a, b){
        let itemG = a.haveRead;
        let itemH = b.haveRead;
        let comparison = 0;
        if (itemG > itemH){
            comparison = 1;
        } else if (itemG < itemH){
            comparison = -1
        }
        return comparison;

      }
      switch (action.type) {
        case 'Title':
          let item = 'title';
          console.log('before ', library);
          library = library.sort(compareTitle).slice(0);
          console.log("after ", library);
          setLibrary(library);
          return library;
        case 'Author':
          library = library.sort(compareAuthor).slice(0);
          setLibrary(library);
          return library;
        case 'Page Count':
          library = library.sort(comparePageCount).slice(0);
          setLibrary(library);
          return library;
        case 'Have Read':
          library = library.sort(compareHaveRead).slice(0);
          setLibrary(library);
          return library
        default:
          throw new Error("reducer broken");
      }
    }

    const tog = (id) => {
      console.log(id);
      const newLibrary = [...library];
      let index = newLibrary.findIndex(x =>x.id === id);
      console.log("tog", id, index, 'before', library[index].haveRead);
      newLibrary[index].haveRead = !library[index].haveRead;
      console.log('  after', newLibrary[index].haveRead)
      setLibrary(newLibrary);
      //library = newLibrary; // NOT REQUIRED DUE TO USESTATE MAGIC.
    }

  switch (tab){
    default:
    case 'library':
      return <LibraryPage showLibrary={library} tog={tog} reducer={reducer}/>  //FLAG
    case 'NewBookForm':
      return <BookForm onAddBook={library}/>
  }
}

export default App;