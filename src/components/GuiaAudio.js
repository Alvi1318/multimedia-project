import React from 'react';

function GuiaAudio() {
  return (
    <div className="container" style={{ marginBottom: '30px', marginTop: '40px' }}>
      <div style={{ 
        backgroundColor: '#e3f2fd', 
        borderLeft: '5px solid #2196f3', 
        padding: '20px', 
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#0d47a1' }}>Plan Your Visit</h3>
          <p style={{ margin: 0 }}>
            Listen to our <strong>Audio Guide</strong> to learn more about the activities before selecting them.
          </p>
        </div>
        
        <div style={{ flexShrink: 0 }}>
          <audio controls style={{ height: '40px' }}>
            <source src="/assets/audio_ambient.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
}

export default GuiaAudio;