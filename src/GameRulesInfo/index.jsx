import React from 'react';
import brokolik from '../img/brokolik.png';
import './style.css';
// ve hře 1 použiju <GameRulesInfo currentGame={0}/> toto pouziju do rodice hra 1, 2, 3 />

const GameRulesInfo = ({ currentGame, hide }) => {
  const text = ['text1', 'text2', 'text3'];
  const currentText = text[currentGame];
  return (
    <div className="rules-info">
      <div className="bubble bubble-bottom">
        <p>{currentText}</p>
        <button onClick={hide}>Začít</button>
      </div>
      <img className="brokolik-rules" src={brokolik} />
    </div>
  );
};

export default GameRulesInfo;
