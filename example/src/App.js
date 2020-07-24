import React from 'react'
import { ImageSpinner, Example } from 'nifty-components'

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
