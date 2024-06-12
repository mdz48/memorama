import React from 'react';
import './Card.css';

export default function Card({ card, onClick }) {
    let cardClass = "card";
    if (card.isFlipped) {
        cardClass += " flipped";
    }

    let cardImage;
    if (card.isFlipped) {
        cardImage = <img src={card.img} alt={card.alt} />;
    } else {
        cardImage = <img src={card.front} alt={card.alt} />;
    }

    return (
        <div id={cardClass} onClick={onClick}>
            {cardImage}
        </div>
    );
}
