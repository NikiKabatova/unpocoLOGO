import React from 'react';
import Button from '../Button';
import Sound from '../Sound';
import GameRulesInfo from '../GameRulesInfo';
import VictoryPopup from '../VictoryPopup';

const Game3 = () => {
  return (
    <main>
      {/* {isInfoVisible && (
        <GameRulesInfo hide={() => setIsInfoVisible(false)} currentGame={0} />
      )}
      {isVictory && <VictoryPopup />} */}
      <nav className="navigation">
        <Button image="arrow" target="/map" className="back__button" />
        <Button image="home" target="/" className="home__button" />
      </nav>
      <Sound />
      <div>tady budou 4 obrázky</div>
    </main>
  );
};

export default Game3;
