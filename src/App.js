import React, { useState } from 'react';
import './App.css';
import Capcalera from './components/Capcalera';
import Peu from './components/Peu';
import Historia from './components/Historia';
import VideoPromo from './components/VideoPromo';
import Festes from './components/Festes';
import GuiaAudio from './components/GuiaAudio';
import LlistaActivitats from './components/LlistaActivitats';
import Cistella from './components/Cistella';
import Mapa from './components/Mapa';

function App() {
  const [activitatsSeleccionades, setActivitatsSeleccionades] = useState([]);

  // Dades traduïdes a l'anglès
  const dadesActivitats = [
    { id: 1, nom: 'Ter River Route', preu: 0, descripcio: 'A relaxing walk along the riverbank nature path.' },
    { id: 2, nom: 'Visit "El Coro" Center', preu: 5, descripcio: 'Guided tour of the cultural center and theater.' },
    { id: 3, nom: 'Old Quarter Tour', preu: 10, descripcio: 'Discover the ancient history of Sarrià de Dalt.' },
    { id: 4, nom: 'Local Food Tasting', preu: 25, descripcio: 'Taste local products at the best restaurants.' }
  ];

  const afegirALaCistella = (activitat) => {
    setActivitatsSeleccionades([...activitatsSeleccionades, activitat]);
  };

  return (
    <div className="app-contenidor">
      <Capcalera />
      
      {/* 1. Història */}
      <Historia />
      
      {/* 2. Vídeo Promocional */}
      <VideoPromo />
      
      {/* 3. Festes */}
      <Festes />

      {/* 4. Secció interactiva (Botiga) */}
      <section className="seccio bg-gris">
        
        <GuiaAudio />

        <div className="container">
          <h2 className="titol-seccio">Tourist Activities</h2>
          <LlistaActivitats 
            activitats={dadesActivitats} 
            funcioAfegir={afegirALaCistella} 
          />
          <Cistella elements={activitatsSeleccionades} />
        </div>
      </section>

      {/* 5. Mapa */}
      <Mapa />

      <Peu />
    </div>
  );
}

export default App;