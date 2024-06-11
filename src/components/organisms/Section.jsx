import React from 'react'
import { data } from '../../data/mysql'
import Card from '../atoms/Card';


export default function Section() {


    const shuffleArray = a => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
      }


  return (
    <>
    <div id="hearder">
        <button>Empezar Juego</button>
    </div>
    <div id="board">
        //Queremos hacer el map del arreglo
        {
            data.map((card) => (
                <Card img={card.img} key={card.id} state={card.state} />
            ))
        }
    </div>
    </>
  )
}
