import React from 'react';

function Cistella({ elements }) {
  const total = elements.reduce((suma, item) => suma + item.preu, 0);

  return (
    <div className="cistella-contenidor">
      <h3>Your Visit Agenda</h3>
      {elements.length === 0 ? (
        <p>You haven't selected any activities yet.</p>
      ) : (
        <ul>
          {elements.map((item, index) => (
            <li key={index}>
              {item.nom} - {item.preu === 0 ? 'Free' : `${item.preu} €`}
            </li>
          ))}
        </ul>
      )}
      <h4>Estimated total cost: {total} €</h4>
    </div>
  );
}

export default Cistella;