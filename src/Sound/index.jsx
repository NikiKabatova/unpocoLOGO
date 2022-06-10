import React from 'react';
import speaker from './speaker.png';
import './style.css';

const Sound = ({ text, sound }) => {
  const audio = new Audio(sound);
  return (
    <button
      className="audio__button"
      onClick={() => {
        audio.play();
      }}
    >
      <img className="button__icon" src={speaker} />
      {text}
    </button>
  );
};

export default Sound;
