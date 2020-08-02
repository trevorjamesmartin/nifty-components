import React from 'react'
import { ImageSpinner, MatrixRain } from 'nifty-components'

function App() {
  return (
    <div
      className='App'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5vw'
      }}
    >
      <MatrixRain />
      <ImageSpinner
        src='https://placekitten.com/g/200/300'
        alt='desription'
        customspinner={<h1>TEST!...</h1>}
        style={{ borderRadius: '1rem', opacity: '77%' }}
      />
    </div>
  )
}

export default App
