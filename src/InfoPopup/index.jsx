import React from 'react';
import brokolik from '../img/brokolik.png';
import './style.css';
import Sound from '../Sound';

// const initialSound = [
//   { id: 1, sound: require('./audio/info_level1.mp3') },
//   { id: 2, sound: require('./audio/info_level2.mp3') },
//   { id: 3, sound: require('./audio/info_level3.mp3') },
// ];

const InfoPopup = ({ currentGame, hide }) => {
  const text = [
    `Ukliď do krabice hračky, které obsahují písmeno R.
  Při úklidu nezapomeň správně a nahlas vyslovovat jejich název.`,
    `Pozorně poslouchej, zopakuj co slyšíš a potom klikni na obrázek, který se shoduje s tím co jsi řekl.`,
    `Poslechni si říkanku, zopakuj ji a potom klikni na obrázek a tím doplň chybějící slovo v říkance.`,
  ];

  const currentText = text[currentGame];
  // const currentSound = initialSound.find(
  //   (Sound) => currentText === Sound.id,
  // ).sound;
  return (
    <div className="rules-info">
      <div className="bubble bubble-bottom">
        {/* TODO:Přidej zvuk ke každé bublině! */}
        {/* <Sound sound={currentSound} /> */}

        <p>{currentText}</p>
        <button className="bubble__button" onClick={hide}>
          Začít
        </button>
      </div>
      <img className="brokolik-rules" src={brokolik} />
    </div>
  );
};

export default InfoPopup;
