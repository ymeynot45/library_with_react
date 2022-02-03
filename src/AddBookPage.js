import React from "react";
// import PropTypes from "prop-types";
import "./AddBookPage.css";
import InsertBookForm from "./BookForm.js"


function AddBookPage({library, addBook, dataRetrieval} ){
    console.log("addbookpage", typeof dataRetrieval);
  return(
    InsertBookForm(dataRetrieval)
  )
};

// PropTypes // later

export default AddBookPage;