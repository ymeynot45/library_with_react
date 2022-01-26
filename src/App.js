import React, { useState} from "react";
import "./App.css";
import LibraryPage from "./LibraryPage.js";
import {library} from "./BookPage.js";
import Nav from "./Nav.js";
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

const Content = ({tab}) => {
  let books = [];
  const tog = (index) => {
    books[index].haveRead = !books[index].haveRead;
  }

  switch (tab){
    default:
    case 'library':
      return <LibraryPage books={library} onToggleBookRead={tog}/>
    case 'NewBookForm':
      return <BookForm onAddBook={}/>
  }
}

export default App;