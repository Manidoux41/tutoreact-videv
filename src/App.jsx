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
const handleDelete = (id) => {
    console.log(id);
    // 1.copie du state
      // version 1 : const fruitsCopy = fruits.slice();
      //ou
      const fruitsCopy = [...fruits];

    // 2.manipuler mon state
    const fruitCopyUpdated= fruitsCopy.filter(fruit => fruit.id !== id)

    // 3. modifier mon state avec le setter
    setFruits(fruitCopyUpdated);
}

// affichage
  return (
    <div className='App'>
        <h1>Liste de fruits</h1>
        <ul>{fruits.map((fruit) => 
            <li key={fruit.id}>{fruit.nom} <button onClick={() => handleDelete(fruit.id)}>X</button></li>)}</ul>
    </div>
  )
}

export default App