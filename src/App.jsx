import { useState } from "react"

const App = () => {

// state
const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" }
])
const voiture = <li>Tesla</li>
// comportements
const handleDelete = () => {
    console.log('handleDelete');
}

// affichage
  return (
    <div className='App'>
        <h1>Liste de fruits</h1>
        <ul>{fruits.map((fruit) => 
            <li key={fruit.id}>{fruit.nom} <button onClick={handleDelete}>X</button></li>)}</ul>
    </div>
  )
}

export default App