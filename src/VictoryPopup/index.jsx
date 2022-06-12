import React from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import homeIcon from './home.png';
import reloadIcon from './refresh.png';
import checkIcon from './check.png';

import stars from './stars.png';

const VictoryPopup = () => {
  const navigate = useNavigate();
  const refreshPage = () => {
    navigate(0);
  };
  return (
    <div className="rules-info">
      <div className="popup">
        <img className="stars" src={stars} alt="Obrázek tří hvězd" />
        <h1 className="popup__title">Skvělá práce</h1>
        <p>Teď už jenom zbývá aby ti rodiče potvrdili úspěšně zdolaný level!</p>

        <Link to="/">
          <button className="home__button">
            <img
              className="button__icon home__icon"
              src={homeIcon}
              alt="Ikona domečku"
            />
          </button>
        </Link>

        <Link to="/map">
          <button className="check__button">
            <img
              className="button__icon check__icon"
              src={checkIcon}
              alt="Ikona s potvrzovací fajfkou"
            />
          </button>
        </Link>

        <button className="reload__button" onClick={refreshPage}>
          <img
            className="button__icon reload__icon"
            src={reloadIcon}
            alt="Ikona znovunačtení"
          />
        </button>
      </div>
    </div>
  );
};

export default VictoryPopup;
