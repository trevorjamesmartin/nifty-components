import React from 'react'
import { ImageSpinner, Example } from 'nifty-components'
// import logo from "./logo.svg";
//import './App.css'

function App() {
  return (
    <div className='App'>
      <Example />
      <ImageSpinner
        src='https://placekitten.com/g/200/300'
        alt='desription'
        customspinner={<h1>TEST!...</h1>}
      />
    </div>
  )
}

export default App
