import { useState } from "react"

const App = () => {

// state
useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" }
])
// comportements


// affichage
  return (
    <div className='App'>
        <h1>Liste de fruits</h1>
        <ul>
            <li>Abricot</li>
            <li>Banane</li>
            <li>Cerise</li>
        </ul>
    </div>
  )
}

export default App