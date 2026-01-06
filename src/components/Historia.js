import React from 'react';

function Historia() {
  return (
    <section className="seccio bg-blanc">
      <div className="container">
        <h2 className="titol-seccio">History & Heritage</h2>
        
        <div className="contingut-historia" style={{ display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }}>
          
          <div style={{ flex: '1', minWidth: '300px', textAlign: 'justify' }}>
            <p>
              Sarrià de Ter has a past deeply marked by its geography. Located on the banks of the Ter River, the village has historically been a strategic crossing point and a hub for using hydraulic resources.
            </p>
            <p>
              During the 19th and 20th centuries, Sarrià was transformed by industrialization, especially with the establishment of paper mills, which defined the working-class identity of the municipality.
            </p>
            <p>
              Today, Sarrià combines this industrial legacy with the recovery of natural spaces and a vibrant cultural life.
            </p>
          </div>

          <div style={{ flex: '1', minWidth: '300px', textAlign: 'center' }}>
            <img 
              src="/assets/imatge_editada.jpg" 
              alt="Artistic postcard of Sarrià de Ter" 
              style={{ 
                width: '100%', 
                maxWidth: '500px', 
                borderRadius: '10px', 
                boxShadow: '0 10px 20px rgba(0,0,0,0.2)' 
              }} 
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Historia;