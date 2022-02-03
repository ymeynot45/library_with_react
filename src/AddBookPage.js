import React from "react";
// import PropTypes from "prop-types";
import "./AddBookPage.css";
import InsertBookForm from "./BookForm.js"


function AddBookPage(dataRetrieval){
  return(
    InsertBookForm(dataRetrieval)
  )
};

// PropTypes // later

export default AddBookPage;