import React from "react";
import PropTypes from "prop-types";
import "./AddBookPage.css";

class BookForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        title: '',
        author: '',
        pageCount: 0,
        haveRead: true,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
            
        });
    }

    handleSubmit(event) {
        
        alert("form submitted: " + this.state.titke + " author: " + this.state.author + " pages: " + this.state.pageCount + " read? " + this.state.haveRead);
        event.preventDefault(); 
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    New Book Form: <br/>
                    Title: <input name="title" type="text" value={this.state.title} onChange={this.handleChange} className="formInputs"/><br/>
                    Author: <input name="author" type="text" value={this.state.author} onChange={this.handleChange} className="formInputs"/><br/>
                    Page Count: <input name="pageCount" type="number" value={this.state.pageCount} onChange={this.handleChange} className="formInputs"/><br/>
                    I Have Read This Book: <input name="haveRead" type="checkbox" checked={this.state.haveRead} onChange={this.handleChange} className="formInputs"/><br/>
                    <input type="submit" value="Submit"/>
                </label>
            </form>
        );
    }
}

// PropTypes // later

export default BookForm;