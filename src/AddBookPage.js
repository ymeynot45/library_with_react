import React from "react";
// import PropTypes from "prop-types";
import "./AddBookPage.css";
import insertBookForm from "./BookForm.js"


function AddBookPage(dataRetrieval){
  return(
    insertBookForm(dataRetrieval)
  )
};

// PropTypes // later

export default AddBookPage;