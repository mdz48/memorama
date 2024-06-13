import React, { useState, useEffect } from 'react';
import { data } from '../../data/mysql';
import Card from '../atoms/Card';
import './Section.css';

export default function Section() {
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);

    const handleClickButton = () => {
        const aux = data.map((card, i) => ({ ...card, id: i, isFlipped: false }));
        const double = [...aux, ...aux].map((card, i) => ({ ...card, uniqueId: i }));
        setCards(shuffleArray(double));
        setFlippedCards([]);
        setMatchedCards([]);
    };

    const handleClickCard = (id) => {
        if (flippedCards.length < 2 && !flippedCards.includes(id) && !matchedCards.includes(id)) {
            setCards(prevCards => prevCards.map(card => {
                if (card.uniqueId === id) {
                    return { ...card, isFlipped: true };
                } else {
                    return card;
                }
            }));
            setFlippedCards([...flippedCards, id]);
        }
    };

    useEffect(() => {
        if (flippedCards.length === 2) {
            const [firstId, secondId] = flippedCards;

            let firstCard = null;
            let secondCard = null;
            for (let i = 0; i < cards.length; i++) {
                if (cards[i].uniqueId === firstId) {
                    firstCard = cards[i];
                } else if (cards[i].uniqueId === secondId) {
                    secondCard = cards[i];
                }
                if (firstCard && secondCard) {
                    i = cards.length;
                }
            }

            if (firstCard.id === secondCard.id) {
                setMatchedCards([...matchedCards, firstId, secondId]);
                setFlippedCards([]);
            } else {
                setTimeout(() => {
                    setCards(prevCards => prevCards.map(card => {
                        if (card.uniqueId === firstId || card.uniqueId === secondId) {
                            return { ...card, isFlipped: false };
                        } else {
                            return card;
                        }
                    }));
                    setFlippedCards([]);
                }, 1000);
            }
        }
    }, [flippedCards, cards, matchedCards]);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    return (
        <>
            <div id="header">
                <button className='button-8' onClick={handleClickButton}>Empezar Juego</button>
            </div>
            <div id="board">
                {cards.map((item) => (
                    <Card 
                        key={item.uniqueId} 
                        card={item} 
                        onClick={() => handleClickCard(item.uniqueId)} 
                    />
                ))}
            </div>
        </>
    );
}
