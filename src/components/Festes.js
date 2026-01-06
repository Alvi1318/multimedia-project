import React from 'react';

function Festes() {
  return (
    <section className="seccio bg-blanc">
      <div className="container">
        <h2 className="titol-seccio">Festivals & Traditions</h2>
        <div className="targetes-info">
          <div className="info-card">
            <h3>Paper Fair (Fira del Paper)</h3>
            <p>
              The most emblematic event. It pays tribute to the town's industrial past. It features handmade paper workshops, exhibitions, and paper dress parades.
            </p>
          </div>
          <div className="info-card">
            <h3>Main Festival (Festa Major)</h3>
            <p>
              Held on the first Sunday of September. The streets fill with music, "correfocs" (fire runs), giants, and the traditional community dinner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Festes;