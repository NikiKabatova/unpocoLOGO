import React from 'react';
import brokolik from '../img/brokolik.png';
import { Link } from 'react-router-dom';
import './style.css';
import Button from '../Button';
import Sound from '../Sound';

const rulesSound = require('./rules.mp3');

const Rules = () => {
  return (
    <main className="rules">
      <nav className="navigation">
        <Button image="home" target="/" className="home__button" />
      </nav>
      <div className="rules__content">
        <p>
          Ahoj já jsem Brokolík a zloun Čilík mi unesl princeznu Karotku. Tvým
          úkolem bude mi pomoci ji získat zpět! Postupně projdeme jednotlivé
          levely, kde budeme plnit úkoly a učit se správě vyslovovat písmenka.
          Rodiče budou tvým pomocníkem a budou ti schvalovat, jestli jsi level
          správně zvládl. Pro vysvobození princezny musíme úspěšně zvládnout
          všechny levely, tak jdeme na to!
        </p>
        <img className="brokolik" src={brokolik} />
        <Sound sound={rulesSound} />
        <button className="button1">
          <Link to="/map">Start</Link>
        </button>
      </div>
    </main>
  );
};

export default Rules;
