import React from 'react';
import doorbell from './doorbell-sound-effect.mp3';
import './style.css';

const Sound = () => {
  const audio = new Audio(doorbell);
  return (
    <div>
      <button
        className="audio__button"
        onClick={() => {
          audio.play();
        }}
      >
        Jednorožec{' '}
        {/* tady potřebuji vložit ten currentPicture - text a vložit icon repráku! */}
      </button>
    </div>
  );
};

export default Sound;
