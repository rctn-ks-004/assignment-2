import logo from '../../logo.svg'
import React from 'react'

function Logo(props) {
  return (
    <div>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello {props.name}
        </a>
      </header>
    </div>
  )
}

export default Logo