import React from 'react'
import { ImageSpinner, MatrixRain, GithubCards } from 'nifty-components'

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
        style={{
          borderRadius: '4px',
          opacity: '77%',
          position: 'fixed',
          top: '4rem',
          left: '4rem'
        }}
      />
      <GithubCards
        borderColorSelected='blue'
        borderColorNormal='black'
        backgroundColor='black'
        style={{
          opacity: '90%',
          color: 'white'
        }}
      />
    </div>
  )
}

export default App
