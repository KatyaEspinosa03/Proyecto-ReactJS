import React, {useState, useEffect}from 'react'
import Card from '../Card/Card';


const CardList = () => {
const [cards, setCards] = useState([]);

console.log("cards", cards)
useEffect(() => {
    fetch("./src/data/data.json")
    .then((response) => response.json())
    .then ((data) => setCards(data));
}, [])

return (
    <div>  hello
        <Card />    
    </div>
)
}

export default CardList