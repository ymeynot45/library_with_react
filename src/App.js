import React, { useState} from "react";
import LibraryPage from "./LibraryPage.js";
import {library} from "./BookPage.js";
import Nav from "./Nav.js";
import "./App.css";
import AddBookPage from "./AddBookPage.js";


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
  switch (tab){
    default:
    case 'library':
      return <LibraryPage books={library}/>
    case 'NewBookForm':
      return <AddBookPage/>
  }
}

export default App;