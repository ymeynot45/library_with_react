import React from "react";
// import PropTypes from "Prop-types";
// import "./BookForm.css"

// const Book = function (title, author, pageNumber, haveRead) {
//   this.title = title;
//   this.author = author;
//   this.pageNumber = pageNumber;
//   this.haveRead = haveRead;
//   return this
// }  

// class BookForm extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//     title: '',
//     author: '',
//     pageCount: 0,
//     haveRead: true,
//     };

//   this.handleChange = this.handleChange.bind(this);
//   this.handleSubmit = this.handleSubmit.bind(this);
// };



// handleChange(event){
//     let target = event.target;
//     let value = target.type === 'checkbox' ? target.checked : target.value;
//     let name = target.name;

//     this.setState({
//       [name]: value 
//     });
// }

// handleSubmit(event) {
//   event.preventDefault(); 
//   console.log(this);
//   console.log("form props " + this.props);
//   console.log("form submitted: " + this.state.title + " author: " + this.state.author + " pages: " + this.state.pageCount + " read? " + this.state.haveRead);
// }



// <form onSubmit={this.handleSubmit}>
// <label>
//         New Book Form: <br/>
//         Title: <input name="title" type="text" value={this.state.title} onChange={this.handleChange} className="formInputs"/><br/>
//         Author: <input name="author" type="text" value={this.state.author} onChange={this.handleChange} className="formInputs"/><br/>
//         Page Count: <input name="pageCount" type="number" value={this.state.pageCount} onChange={this.handleChange} className="formInputs"/><br/>
//         I Have Read This Book: <input name="haveRead" type="checkbox" checked={this.state.haveRead} onChange={this.handleChange} className="formInputs"/><br/>
//         <input type="submit" value="Submit"/>
//     </label>
// </form>

function insertBookForm(){
  //insert constants
  return(
    <div> Add a Book!
      <form action='' method='post' id='newBookForm'/><br></br>
        <label>Title: </label> 
        <input type='text' id='newTitle' name='title'/><br></br>
        <label>Author: </label> 
        <input type='text' id='newAuthor' name='author'/><br></br>
        <label>Page Count: </label> 
        <input type='number' name='pageNumber'/><br></br>
        <label>Have Read: </label> 
        <input id='haveReadFalse' name='haveRead' type='checkbox' value='true'/><label for='haveReadRadioFalse'>Finished</label><br></br>
        <input type='submit' id='newBookSubmitButton' name='newBookSubmit' value='Submit'/>
    </div>
  );
}


export default insertBookForm;