# nifty-components

> some nifty components for your react app

[![NPM](https://img.shields.io/npm/v/nifty-components.svg)](https://www.npmjs.com/package/nifty-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save nifty-components
```

## Usage

```jsx
import React from 'react'
import { ImageSpinner } from 'nifty-components'

function App() {
  const spinner = <h2>loading, please wait</h2>
  return (
    <div className='App'>
      <ImageSpinner
        alt='desription'
        src='https://placekitten.com/g/200/300'
        customspinner={spinner}
      />
    </div>
  )
}

export default App
```

## License

MIT © [Trevor Martin](https://github.com/debauchery1st)
