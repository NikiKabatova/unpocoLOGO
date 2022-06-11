import React from 'react';
import brokolik from '../img/brokolik.png';
import { Link } from 'react-router-dom';
import './style.css';
import Button from '../Button';

const Rules = () => {
  return (
    <main className="game-rules">
      <nav className="navigation">
        <Button image="home" target="/" className="home__button" />
      </nav>
      <div className="game-rules__content">
        <p>
          Ahoj, já jsem Brokolík, tvým úkolem bude mi pomoci zachránit princeznu
          Karotku ze spárů zlouna Čilíka. Postupně budeme procházet jednotlivá
          stanoviště a plnit úkoly, s úkoly ti pomohou rodiče. Pokud se ti
          podaří splnit úkol, posouváš se na další stanoviště, ve hře máš tři
          životy, díky kterým můžeš úkol opakovat. K osvobození princezny je
          musíš splnit všechny. Tak vzhůru do boje.
        </p>
        <img className="brokolik" src={brokolik} />
        <button className="button1">
          <Link to="/map">Start</Link>
        </button>
      </div>
    </main>
  );
};

export default Rules;
