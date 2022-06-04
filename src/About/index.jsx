import React from 'react';
import brokolik from '../img/brokolik.png';
import karotka from '../img/karotka.png';
import cilik from '../img/cilik.png';
import { Link } from 'react-router-dom';
import './style.css';

const About = () => {
  return (
    <>
      <main className="about">
        <button>
          <Link className="home" to="/">
            X
          </Link>
        </button>
        <div className="container">
          <div className="characters">
            <img className="brokolik" src={brokolik} />
            <img className="karotka" src={karotka} />
            <img className="cilik" src={cilik} />
          </div>
          <h1>Info o hře</h1>
          <p>
            Ahoj rodičové, rád bych Vám pověděl pár slov o logopedii a proč je
            dobré s ní začínat už v útlém věku. Všichni ze zkušenosti víme, že
            rodič je tím nejlepším vzorem pro své děti. Trávíte spolu každý den
            a děti rády napodobují to co vidí a slyší. To je největší hybnou
            silou ve vývoji komunikačních a jazykových schopností dítěte.
          </p>
          <p>
            Preventivní logopedickou péči v podobě rozvoje je vhodné aplikovat
            už od útlého věku dítěte. Velmi důležitá je komunikace v rodině.
            Jakou roli má mluvené slovo, jak moc se využívá a to vše ovlivňuje
            dítě. Hra je nejvhodnější forma pro učení dětí předškolního věku.
            Součástí této hry budete i vy, aby jste dětem pomohli správně
            rozvíjet řečové schopnosti.
          </p>
          <p>
            Podle průzkumu, který jsem provedl já sám je zastaralé tvrdit, že na
            logopedii je čas, víte, slýchávám to ze všech stran. Pouze to
            schovává nejistotu a nechuť začít dělat něco právě teď. Logoped může
            poradit rodičům dvouletého dítěte aktivity, které realizují v pohodě
            doma, v 5 letech už na ní nemusí docházet, protože rodiče správně
            zacílili aktivity v batolecím věku. Budu moc rád, když podpoříte své
            milované ratolesti tím, že si s nimi hru zahrajete.
          </p>
        </div>

        <div>
          <h1>Výslovnost jednotlivých písmenek</h1>
          <p>
            Písmeno R - Při nácviku dávejte pozor na správné postavení mluvidel:
            Ústa mají být mírně pootevřená a špička jazyka se dotýká za horními
            řezáky, aby si dítě nepomáhalo dolní čelistí, pomůže opřít
            ukazováček o dolní přední zuby, ústa tak zůstanou pootevřená a jazyk
            lépe „poskočí“. Výborné je zpívání, společně zpívejte rychlé a
            rytmické písničky beze slov – hlásky a jejich shluky – dadada,
            dndndn, dyndyndyn… Začněte tím, že místo R budete vyslovovat hlásku
            D. Pokud bude dítě D vyslovovat potichu, jemně a správně, postupně
            bude vyslovovat zvuk, který je hlásce R podobný a nakonec se podaří
            vlastní R.
          </p>
          <p>
            Písmeno L - První nejdůležitější krok je, aby dítě otevřelo ústa a
            opřelo jazyk za horní zuby. V této poloze zkoušíme vytvořit dlouhý
            zvuk LLLLL a až potom plácnout jazýčkem dolů. Když se toto podaří,
            ozve se hláska L.
          </p>
          <p>
            Písmena D, T, N - Ústa jsou mírně pootevřená, jazyk se opírá o
            přední spodní řezáky, zbytek jazyka se prohne tak, že se dotýká
            tvrdého patra. Takto dítě vyslovuje slabiky DA, TA, NA, atd. – ozve
            se však ĎA, ŤA, ŇA. Každému dítěti se daří vyslovit správně jako
            první hláska jiná.
          </p>
        </div>
      </main>
    </>
  );
};

export default About;
