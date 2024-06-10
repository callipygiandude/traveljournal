import React from 'react'
import Nav from './components/Nav'
import Card from './components/Card';
import Modal from './components/Modal';
import data from './data'

export default function App() {
    let initCards = data.map(item => ({...item}));

    let [cards, setCards] = React.useState(initCards);
    let [showModal, setShowModal] = React.useState(false);
    
    function addCard(newCard) {
        setCards(oldCards => ([
            ...oldCards,
            {...newCard,
             id: Date.now()}
        ]));
    }

    function removeCard(id) {
        setCards(oldCards=>oldCards.filter(card => card.id !== id));
    }

    return (
        <div>
            <Nav openModal={()=>{setShowModal(true)}}/>
            {cards.map(card => (
                <Card 
                    key={card.id}
                    {...card}
                    removeCard={() => removeCard(card.id)}
                />
            ))}
            {showModal && <Modal addCard={addCard} closeModal={()=>{setShowModal(false)}}/>}
        </div>
        
    );
}