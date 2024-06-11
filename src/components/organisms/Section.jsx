import React from 'react'
import { data } from '../../data/mysql'
import Card from '../atoms/Card';
import { useState } from 'react';
import './Section.css';


export default function Section() {

    const [cards, setCards] = useState ([]);

    const handleClickButton = (e) => {
            const aux = data.map(card => <Card img={card.img} state={card.state} alt={card.alt} name={card.name} front={card.front} isFlipped={false} />)
            // const aux1 = data.map((card, i) => <Card img={card.img} key={i} state={card.state} alt={card.alt} name={card.name} front={card.front} />)
            const double = (aux.concat(aux))
        setCards(shuffleArray(double));
    }

    const handleClickCard = (e) => {
        
    }

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }   
        return array;
      }

      


  return (
    <>
    <div id="hearder">
        <button onClick={handleClickButton}>Empezar Juego</button>
    </div>
    <div id="board">
        {/* {cards} */}
        {
            cards.map((item, i) => <button onClick={handleClickCard} key={i}>{item}</button>)
        }
    </div>
    </>
  )
}
