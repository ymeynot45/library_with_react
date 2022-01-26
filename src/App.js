import React, { useState} from "react";
import "./App.css";
// import {library} from "./Book.js";
import Nav from "./Nav.js";
import LibraryPage from "./LibraryPage.js";
import BookForm from "./AddBookPage.js";


const App = () => {
  const [activeTab, setActiveTab] = useState('library');
  // const ;
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
    let library = [
      {
          id: 1,
          title: "The Hobbit",
          author: "J.R.R. Tolkien",
          pageCount: 295,
          haveRead: false

      },
      {
          id: 2,
          title: "Flight from the Dark",
          author: "Joe Denver",
          pageCount: 300,
          haveRead: true

      },
      {
          id: 3,
          title: "Fire on the Water",
          author: "Gary Chalk",
          pageCount: 350,
          haveRead: false

      }
    ];

    const tog = () => {
      console.log("Huzza");
      // library[index].haveRead = !library[index].haveRead;
    }
  
  switch (tab){
    default:
    case 'library':
      return <LibraryPage showLibrary={library} tog={tog}/>  //FLAG
    case 'NewBookForm':
      return <BookForm onAddBook={library}/>
  }
}

export default App;