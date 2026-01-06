import React from 'react';

function VideoPromo() {
  return (
    <section className="seccio" style={{ backgroundColor: '#1a1a1a', color: 'white', textAlign: 'center' }}>
      <div className="container">
        <h2 className="titol-seccio" style={{ color: 'white', borderBottomColor: '#00d2ff' }}>
          Discover Sarrià in 1 Minute
        </h2>
        <p style={{ marginBottom: '30px' }}>Watch our promotional video and fall in love with our local spots.</p>
        
        <div className="video-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <video 
            controls 
            poster="/assets/imatge_editada.jpg" 
            style={{ width: '100%', borderRadius: '12px', boxShadow: '0 0 20px rgba(0,210,255,0.3)' }}
          >
            <source src="/assets/video_promo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

export default VideoPromo;