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

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert("form submitted: " + this.title.value + "state: " + this.state.value);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    New Book Form: <br/>
                    Title: <input name="title" type="text" value={this.state.title} onChange={this.handleInputChange} className="formInputs"/><br/>
                    Author: <input name="author" type="text" value={this.state.author} onChange={this.handleInputChange} className="formInputs"/><br/>
                    Page Count: <input name="pageCount" type="number" value={this.state.pageCount} onChange={this.handleInputChange} className="formInputs"/><br/>
                    I Have Read This Book: <input name="haveRead" type="checkbox" checked={this.state.haveRead} onChange={this.handleInputChange} className="formInputs"/><br/>
                    <input type="submit"/>
                </label>
            </form>
        );
    }
}

// PropTypes // later

export default BookForm;