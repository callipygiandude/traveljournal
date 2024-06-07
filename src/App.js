import React from 'react'
import Nav from './components/Nav'
import Card from './components/Card';
import data from './data'

export default function App() {
    let cards = data.map(item => {
        return (
            <Card 
                {...item}
            />
        );
    });
    return(
        <div>
            <Nav/>
            {cards}
        </div>
        
    );
}