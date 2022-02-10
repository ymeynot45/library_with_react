import PropTypes from 'prop-types'
import './AddBookPage.css'
import InsertBookForm from './BookForm.js'

function AddBookPage ({ dataRetrieval }) {
  return (
    InsertBookForm(dataRetrieval)
  )
};

AddBookPage.propTypes = {
  dataRetrieval: PropTypes.func.isRequired
}

export default AddBookPage
