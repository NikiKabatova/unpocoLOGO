import React from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import homeIcon from './img/home.png';
import reloadIcon from './img/refresh.png';
import checkIcon from './img/check.png';
// TODO: tady v tom mám někde chybu! -> import victoryGif from '.img/victoryGif.gif';
import stars from './img/stars.png';

const FinalVictoryPopup = () => {
  const navigate = useNavigate();
  const refreshPage = () => {
    navigate(0);
  };
  return (
    <div className="rules-info">
      <div className="final-popup">
        <img className="stars" src={stars} alt="Obrázek tří hvězd" />
        <h1 className="final-popup__title">Gatuluji!</h1>
        <p>
          Právě jsi úspěšně dokončil celou hru a pomohl Brokolíkovi vysvobodit
          Karotku.
        </p>
        {/* TODO: Import gif do popupu! */}
        {/* <img src={victoryGif} alt="skákající brokolík s mrkvičkou" /> */}

        {/* TODO: Co mám dát za tlačítka do finálního popupu?  */}
        <Link to="/">
          <button className="home__button">
            <img className="button__icon" src={homeIcon} alt="Ikona domečku" />
          </button>
        </Link>

        <Link to="/map">
          <button className="check__button">
            <img
              className="button__icon"
              src={checkIcon}
              alt="Ikona s potvrzovací fajfkou"
            />
          </button>
        </Link>

        <button className="reload__button" onClick={refreshPage}>
          <img
            className="button__icon"
            src={reloadIcon}
            alt="Ikona znovunačtení"
          />
        </button>
      </div>
    </div>
  );
};

export default FinalVictoryPopup;
