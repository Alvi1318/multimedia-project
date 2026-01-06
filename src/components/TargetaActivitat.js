import React from 'react';

function TargetaActivitat({ dades, onAfegir }) {
  return (
    <div className="targeta-activitat">
      <h3>{dades.nom}</h3>
      <p>{dades.descripcio}</p>
      <p><strong>Price: {dades.preu === 0 ? 'Free' : `${dades.preu} €`}</strong></p>
      <button className="boto-afegir" onClick={() => onAfegir(dades)}>
        Join In!
      </button>
    </div>
  );
}

export default TargetaActivitat;