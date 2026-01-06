import React from 'react';

function Mapa() {
  return (
    <section className="seccio bg-blanc">
      <div className="container">
        <h2 className="titol-seccio">Where Are We?</h2>
        <p style={{ textAlign: 'center', marginBottom: '20px' }}>
          Sarrià de Ter is located at the northern entrance of Girona, following the course of the Ter river.
        </p>
        <div className="mapa-container">
          <iframe 
            title="Map of Sarrià de Ter"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11855.46328246338!2d2.8123896!3d42.0163914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bae685f02930bf%3A0x400fae021a46630!2s17840%20Sarri%C3%A0%20de%20Ter%2C%20Girona!5e0!3m2!1sca!2ses!4v1703000000000!5m2!1sca!2ses" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy">
          </iframe>
        </div>
      </div>
    </section>
  );
}

export default Mapa;