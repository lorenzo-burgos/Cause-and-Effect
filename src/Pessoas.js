import React, { useEffect, useState } from "react"

function Pessoas({ onPersonClick }) {
  const [pessoas, setPessoas] = useState([])
  const [selectedPerson, setSelectedPerson] = useState(null)
  const [highlightedPerson, setHighlightedPerson] = useState(null)

  useEffect(() => {
    fetch('Pessoas.json')
      .then(response => response.json())
      .then(data => setPessoas(data.Pessoas))
      .catch(error => console.error(error))
  }, [])

  const handlePersonClick = (pessoa) => {
    setSelectedPerson(pessoa)
    onPersonClick(pessoa)
  }

  return (
    <div>
      <h1>Russian leaders of the XX century</h1>
      <ul>
        {pessoas.map(pessoa => (
          <li
            key={pessoa.name}
            onClick={() => handlePersonClick(pessoa)}
            onMouseEnter={() => setHighlightedPerson(pessoa)}
            onMouseLeave={() => setHighlightedPerson(null)}
            style={{
              cursor: "pointer",
              fontWeight: selectedPerson === pessoa ? "bold" : highlightedPerson === pessoa ? "bold" : "normal"
            }}
          >
            {pessoa.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pessoas

