import React from 'react';
import TargetaActivitat from './TargetaActivitat';

function LlistaActivitats({ activitats, funcioAfegir }) {
  return (
    <div className="graella-activitats">
      {activitats.map((act) => (
        <TargetaActivitat 
          key={act.id} 
          dades={act} 
          onAfegir={funcioAfegir} 
        />
      ))}
    </div>
  );
}

export default LlistaActivitats;