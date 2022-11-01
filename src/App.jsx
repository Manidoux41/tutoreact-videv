import { useState } from "react"

const App = () => {

// state
const [counter, setCounter] = useState(1)

// comportements


// affichage
  return (
    <div className='App'>
        <h1>{counter}</h1>
    </div>
  )
}

export default App