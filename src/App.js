import React, { useState} from "react";
import Nav from "./Nav.js";
import "./App.css";

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

const Content = ({tab}) => {
  switch (tab){
    default:
    case 'library':
      return <span> the library</span>
    case 'NewBookForm':
      return <span> Add new book</span>
  }
}

export default App;