import React from "react";
import Nav from "./Nav.js";
import "./App.css";

const App = () => {
  return(
    <div className='App'>
      <Nav />
      <main className="App-content">
        <span>Testing span</span>
      </main>
    </div>
  )
};

export default App;