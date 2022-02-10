import React from 'react'
import PropTypes from 'prop-types'

const Nav = ({ activeTab, onTabChange }) => {
  const itemClass = tabName =>
    `App-nav-tab ${
      activeTab === tabName ? 'selected' : ''
    }`

  return (
    <nav className="App-nav">
        <ul>
          <li className={itemClass('library')}>
            <button onClick={() => onTabChange('library')}>
              Books
            </button>
          </li>
          <li className={itemClass('NewBookForm')}>
            <button onClick={() => onTabChange('NewBookForm')}>
              New book Form
            </button>
          </li>
        </ul>
    </nav>
  )
}

Nav.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired
}

export default Nav
