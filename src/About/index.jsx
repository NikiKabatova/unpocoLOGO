import React from 'react';
import brokolik from '../img/brokolik.png';
import karotka from '../img/karotka.png';
import cilik from '../img/cilik.png';
import Button from '../Button';
import { Link } from 'react-router-dom';
import './style.css';

const About = () => {
  return (
    <>
      <main>
        <Button image="home" target="/" className="home__button" />

        <div className="container">
          <div className="characters">
            <div>
              <img src={brokolik} alt="Obrázek postavičky Brokoíka brokolice" />
              <p>Brokolík</p>
            </div>

            <div>
              <img src={karotka} alt="Obrázek postavičky Karotky mrkve " />
              <p>Karotka</p>
            </div>

            <div>
              <img src={cilik} alt="Obrázek postavičky Čilíka papiky" />
              <p>Čilík</p>
            </div>
          </div>
          <section className="about">
            <h1 className="about__title">O logopedii</h1>
            <p>
              S logopedií je dobré začínat už v útlém věku. Rodič je tím
              nejlepším vzorem pro své děti. Trávíte spolu každý den a děti rády
              napodobují to co vidí a slyší. Toto má největší hybnou sílu ve
              vývoji komunikačních a jazykových schopností dítěte
            </p>
            <p>
              Podle průzkumu není dobré tvrdit, že na logopedii je čas. Logoped
              může poradit rodičům dvouletého dítěte aktivity, které se
              realizují v pohodlí domova a v 5 letech už na ní nemusí docházet,
              protože rodiče správně zacílili aktivity v brzkém věku dítěte.
              Nejvhodnější formou pro učení dětí předškolního věku je hra.
            </p>
            <p>
              Tato hra je je zacílená na hlavně výslovnost jednotlivých písmen a
              i vy budete její součástí! Na vás je zhodnotit jestli to vaše
              ratolest řekla správně a nebo nikoliv. Nebojte se je podpořit a
              klidně je nechat level opakovat aby si výslovnost opravdu
              procvičily.
            </p>
          </section>

          <section className="about">
            <h1 className="about__title">Jak trénovat výslovnost</h1>
            <h3>Písmeno R</h3>
            <p>
              Při nácviku dávejte pozor na správné postavení mluvidel: Ústa mají
              být mírně pootevřená a špička jazyka se dotýká za horními řezáky,
              aby si dítě nepomáhalo dolní čelistí, pomůže opřít ukazováček o
              dolní přední zuby, ústa tak zůstanou pootevřená a jazyk lépe
              „poskočí“. Výborné je zpívání, společně zpívejte rychlé a rytmické
              písničky beze slov – hlásky a jejich shluky – dadada, dndndn,
              dyndyndyn… Začněte tím, že místo R budete vyslovovat hlásku D.
              Pokud bude dítě D vyslovovat potichu, jemně a správně, postupně
              bude vyslovovat zvuk, který je hlásce R podobný a nakonec se
              podaří vlastní R.
            </p>
            <h3>Písmeno L</h3>
            <p>
              První nejdůležitější krok je, aby dítě otevřelo ústa a opřelo
              jazyk za horní zuby. V této poloze zkoušíme vytvořit dlouhý zvuk
              LLLLL a až potom plácnout jazýčkem dolů. Když se toto podaří, ozve
              se hláska L.
            </p>
            <h3>Písmena D, T, N</h3>
            <p>
              Ústa jsou mírně pootevřená, jazyk se opírá o přední spodní řezáky,
              zbytek jazyka se prohne tak, že se dotýká tvrdého patra. Takto
              dítě vyslovuje slabiky DA, TA, NA, atd. – ozve se však ĎA, ŤA, ŇA.
              Každému dítěti se daří vyslovit správně jako první hláska jiná.
            </p>
          </section>
          <button className="button1">
            <Link to="/map">Start</Link>
          </button>
        </div>
      </main>
    </>
  );
};

export default About;
