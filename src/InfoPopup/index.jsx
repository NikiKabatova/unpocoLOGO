import React from 'react';
import brokolik from '../img/brokolik.png';
import './style.css';
import Sound from '../Sound';

const data = [
  {
    text: `Ukliď do krabice hračky, které obsahují písmeno R.
  Při úklidu nezapomeň správně a nahlas vyslovovat jejich název.`,
    sound: require('./audio/info_level1.mp3'),
  },
  {
    text: `Pozorně poslouchej, zopakuj co slyšíš a potom klikni na obrázek, který se shoduje s tím, co jsi řekl.`,
    sound: require('./audio/info_level2.mp3'),
  },
  {
    text: `Poslechni si říkanku, zopakuj ji a potom klikni na obrázek a tím doplň chybějící slovo v říkance.`,
    sound: require('./audio/info_level3.mp3'),
  },
];

const InfoPopup = ({ currentGame, hide }) => {
  const currentText = data[currentGame].text;
  const currentSound = data[currentGame].sound;

  return (
    <div className="rules-info">
      <div className="bubble bubble-bottom">
        <p>{currentText}</p>
        <Sound sound={currentSound} />
        <button className="bubble__button" onClick={hide}>
          Začít
        </button>
      </div>
      <img className="brokolik-rules" src={brokolik} />
    </div>
  );
};

export default InfoPopup;
