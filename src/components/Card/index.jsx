import React from 'react'

const Card = (props) => {
  // const {style, rest } = props;
  const parentStyle = {
    display: 'grid',
    gridTemplate: 'auto 1fr auto / auto 1fr auto'
  }
  const headerStyle = {
    padding: '2em',
    gridColumn: '1 / 4'
  }
  const leftStyle = {
    gridColumn: '1 / 2'
  }
  const mainStyle = {
    gridColumn: '2 / 3'
  }
  const rightStyle = {
    gridColumn: '3 / 4'
  }
  return (
    <div {...props}>
      <div className='nifty-card' style={parentStyle}>
        <header className='nifty-card-header' style={headerStyle} />
        <div className='nifty-card-left' style={leftStyle} contentEditable>
          Left Side
        </div>
        <main className='nifty-card-main' style={mainStyle} contentEditable>
          Main Content
        </main>
        <div className='nifty-card-right' style={rightStyle} contentEditable>
          Right Side
        </div>
        <footer className='nifty-card-footer'>footer</footer>
      </div>
    </div>
  )
}

export default Card
