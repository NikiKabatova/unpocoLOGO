import React from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';

const VictoryPopup = () => {
  const navigate = useNavigate();
  const refreshPage = () => {
    navigate(0);
  };
  return (
    <div className="rules-info">
      <div className="bubble">
        <h1>Huráá</h1>
        <p>Teď už jenom zbývá aby ti rodiče potvrdili úspěšně zdolaný level!</p>
        <Link to="/">
          <button>Home</button>
        </Link>
        <button onClick={refreshPage}>Reload</button>
        <Link to="/map">
          <button>OK</button>
        </Link>
      </div>
    </div>
  );
};

export default VictoryPopup;
