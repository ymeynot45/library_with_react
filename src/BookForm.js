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

    document.getElementById("newBookForm").reset();
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
      <div>Add a Book!</div>
      {submitting && 
      <div id="submittingMessage" >Submitting Form ... 
      You are submitting the following:
         <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>{name}</strong>:{value.toString()}</li>
           ))}
         </ul></div>
      }
      <div> 
        <form id="newBookForm" onSubmit={handleSubmit}>
          <fieldset className="wrapper">
            <label className="prompts" >Title: </label> 
            <input type='text' id='newTitle' className="inputs" name='title' onChange={handleChange}/>
            <label className="prompts">Author: </label> 
            <input type='text' id='newAuthor' className="inputs" name='author' onChange={handleChange}/>
            <label className="prompts">Page Count: </label> 
            <input type='number' className="inputs" name='pageCount' onChange={handleChange}/>
            <label className="prompts">Finished the Book: </label> 
            <input id='haveReadFalse' className="inputs" name='haveRead' type='checkbox' value='false' onChange={handleChange}/>
            <input type='submit' id='newBookSubmitButton' name='newBookSubmit' value='Submit'/>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

// InsertBookForm.propTypes = {
//   dataRetrieval: PropTypes.func.isRequired,
// };

export default InsertBookForm;