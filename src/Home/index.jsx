import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.svg';
import './style.css';
const Home = () => {
  return (
    <main>
      <div className="container">
        <img className="logo" src={logo} />
        <p className="logo-title">un poco LOGO</p>
        <button className="button1">
          <Link to="/intro">START</Link>
        </button>
        <button className="button2">
          <Link to="/about">O HŘE</Link>
        </button>
      </div>
    </main>
  );
};

export default Home;
