import React, { useState }  from "react";
import Pessoas from "./Pessoas";
import Pessoa from "./Pessoa"
import "./App.css"

function App() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handlePersonClick = (person) => {
    setSelectedPerson(person);
  };
  return (
    <div className="App">
      <div className="esquerda"><Pessoas onPersonClick={handlePersonClick}/></div>
      <div className="direita"><Pessoa selectedPerson={selectedPerson}/></div>
    </div>
  );
}

export default App;
