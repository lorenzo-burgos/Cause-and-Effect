import React from "react";

function Pessoa({ selectedPerson }) {
  return (
    <div>
      {selectedPerson && (
        <div>
          <h2>{selectedPerson.name}</h2>
          <img src={selectedPerson.image} alt={selectedPerson.name} style={{ width: "400px", height: "500px" }} /><br/>
          <span>{selectedPerson.birth_date}</span><br/>
          <span>{selectedPerson.death_year}</span><br/>
          <span>{selectedPerson.role}</span><br/>
          <span>{selectedPerson.party}</span><br/>
          <span>To call Kremlin dial: </span>
          <span>{selectedPerson.telephone}</span><br/>
        </div>
      )}
    </div>
  );
}

export default Pessoa;