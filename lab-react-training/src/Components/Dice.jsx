import React, { useState } from 'react';

const dices = [
  '/img/dice1.png',
  '/img/dice2.png',
  '/img/dice3.png',
  '/img/dice4.png',
  '/img/dice5.png',
  '/img/dice6.png',
];

const Dice = () => {
  const [dice, setDice] = useState(false);

  const handleClick = () => {
    console.log('clicked');
    console.log(dice);
    console.log(!dice);
    //la condition if agit au 1er affichage
    if (dice) return; //dès l'affichage le state est false
    setDice(!dice); //quand il est cliqué passe à true
    setTimeout(() => {
      // et lance le settimeout pour un seconde
      setDice(dice); // avant d'afficher une nouvelle image random
    }, 1000);
  };

  const defaultImg = '/img/dice-empty.png';
  const randomIndex = Math.floor(Math.random() * dices.length);
  const randomImg = dices[randomIndex];

  return (
    <img
      onClick={handleClick}
      style={{ width: '100px' }}
      src={dice ? defaultImg : randomImg}
      alt="dice"
    />
  );
};

export default Dice;
