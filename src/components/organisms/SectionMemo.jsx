import React from 'react'
import CardMemo from '../molecules/CardMemo'
import { useState, useEffect } from 'react';
import data from '../../data/mysql';


export default function SectionMemo() {

  const [cardsShuffled, setCardsShuffled] = useState([])

  useEffect( () => {
    const shuffledCards = shuffleCard([...data.img, ...data.img])
    setCardsShuffled(shuffleArray.map( (emoji, i) => ({
      index: i, emoji, flipped: false
    })))

  }, []);

  const shuffleArray = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  return (
    <CardMemo cards = { cardsShuffled }/>
  )
}
