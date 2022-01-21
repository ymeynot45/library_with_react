import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function HelloWorld() {
  return(
    <div>Hello</div>
  );
}

  ReactDOM.render(
    <HelloWorld/>, document.querySelector('#root')
  );

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );