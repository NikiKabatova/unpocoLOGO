import React from 'react';
import brokolik from '../img/brokolik.png';
import { Link } from 'react-router-dom';
import './style.css';

const Intro = () => {
  return (
    <main>
      <button>
        <Link className="home" to="/">
          Home
        </Link>
        {/* místo textu HOME dám přímo ikonku jako img */}
      </button>
      <p>
        Ahoj, já jsem Brokolík, tvým úkolem bude mi pomoci zachránit princeznu
        Karotku ze spárů zlouna Čilíka. Postupně budeme procházet jednotlivá
        stanoviště a plnit úkoly, s úkoly ti pomohou rodiče. Pokud se ti podaří
        splnit úkol, posouváš se na další stanoviště, ve hře máš tři životy,
        díky kterým můžeš úkol opakovat. K osvobození princezny je musíš splnit
        všechny. Tak vzhůru do boje.
      </p>
      <img className="brokolik" src={brokolik} />
      <button className="button1">Start</button>
    </main>
  );
};

export default Intro;
