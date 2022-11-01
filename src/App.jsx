import { useState } from "react"

const App = () => {

// state
const [counter, setCounter] = useState(1)

// comportements
const handleClick = () => {
    setCounter(counter+ + 1)
}

// affichage
  return (
    <div className='App'>
        <h1>{counter}</h1>
        <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default App