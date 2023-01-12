// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'


const countReducer =(state, action) => {
 switch (action.type) {
  case 'INCREMENT': {
      return {count: state.count + action.step}
  }
  case 'DECREMENT': {
    return {count: state.count - action.step}
}
  default:{
    throw new Error(`Unsupported action type: ${action.type}`)
  }
 }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {count: initialCount})
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
  const decrement = () => dispatch({type: 'DECREMENT', step})
  return <><button onClick={increment}>Increment</button>{count}
  <button onClick={decrement}>Decrement</button>
  </>
}

function App() {
  return <Counter />
}

export default App
