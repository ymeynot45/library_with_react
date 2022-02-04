import React, {useReducer, useState} from "react";
// import PropTypes from "Prop-types";
import "./BookForm.css"

const formReducer = (state, event) => {
  return {
    ... state, 
    [event.name]: event.value,
  }
}

function InsertBookForm(dataRetrieval){
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useReducer(formReducer, []);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
    dataRetrieval(formData);

    setTimeout(() =>{
      setSubmitting(false);
    }, 3000)
  }

  const handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';

    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,
    })
  }

  return(
    <div className="bookFormWrapper">
      <div>
        Other information
      </div>
      {submitting && 
      <div id="submittingMessage" >Submitting Form ... 
      You are submitting the following:
         <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>{name}</strong>:{value.toString()}</li>
           ))}
         </ul></div>
      }
      <div> Add a Book!
        <form id="newBookForm" onSubmit={handleSubmit}><br></br>
          <fieldset >
            <label>Title: </label> 
            <input type='text' id='newTitle' name='title' onChange={handleChange}/><br></br>
            <label>Author: </label> 
            <input type='text' id='newAuthor' name='author' onChange={handleChange}/><br></br>
            <label>Page Count: </label> 
            <input type='number' name='pageCount' onChange={handleChange}/><br></br>
            <label>Have Read: </label> 
            <input id='haveReadFalse' name='haveRead' type='checkbox' value='false' onChange={handleChange}/>Finished<br></br>
            <input type='submit' id='newBookSubmitButton' name='newBookSubmit' value='Submit'/>
          </fieldset>
        </form>
      </div>
    </div>
  );
}


export default InsertBookForm;