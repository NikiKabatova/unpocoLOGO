import React from 'react';
import map from './img/map.png';
import caveGray from './img/caveGray.png';
import waterfallGray from './img/waterfallGray.png';
import vulcanoGray from './img/vulcanoGray.png';
import caveColor from './img/caveColor.png';
import waterfallColor from './img/waterfallColor.png';
import vulcanoColor from './img/vulcanoColor.png';
import Button from '../Button';
import { Link } from 'react-router-dom';

import './style.css';

const Map = ({ unlockedLevels }) => {
  const level1 = unlockedLevels[1] ? caveColor : caveGray;
  const level2 = unlockedLevels[2] ? waterfallColor : waterfallGray;
  const level3 = unlockedLevels[3] ? vulcanoColor : vulcanoGray;
  const highlight1 = unlockedLevels[2] === false;
  const highlight2 = unlockedLevels[2] === true && unlockedLevels[3] === false;
  // const highlight2 = unlockedLevels[2] && !unlockedLevels[3]
  const highlight3 = unlockedLevels[3] === true;
  return (
    <main className="test">
      <nav className="navigation">
        <Button
          image="home"
          target="/"
          className="home__button home__button--map"
        />
      </nav>
      <div className="map">
        <img className="map__image" src={map} />
        <Link to="/game1">
          <img
            className={highlight1 ? 'level1 highlight-level' : 'level1 '}
            src={level1}
          />
        </Link>
        <Link to="/game2">
          <img
            className={highlight2 ? 'level2 highlight-level' : 'level2 '}
            src={level2}
          />
        </Link>
        <Link to="/game3">
          <img
            className={highlight3 ? 'level3 highlight-level' : 'level3 '}
            src={level3}
          />
        </Link>
      </div>
    </main>
  );
};

export default Map;
