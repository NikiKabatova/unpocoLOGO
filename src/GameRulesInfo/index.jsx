import React from 'react';
import brokolik from '../img/brokolik.png';
import './style.css';
import Sound from '../Sound';

const GameRulesInfo = ({ currentGame, hide }) => {
  const text = [
    `Ukliď do krabice hračky, které obsahují písmeno R.
  Při úklidu nezapomeň správně a nahlas vyslovovat jejich název.`,
    `Pozorně poslouchej, zopakuj co slyšíš a potom klikni na obrázek, který se shoduje s tím co jsi řekl.`,
    `Poslechni si říkanku, zopakuj ji a potom klikni na obrázek a tím doplň chybějící slovo v říkance.`,
  ];
  const currentText = text[currentGame];
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

export default GameRulesInfo;
