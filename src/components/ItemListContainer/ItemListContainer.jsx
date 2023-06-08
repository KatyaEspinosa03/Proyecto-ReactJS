
import React, {useState, useEffect} from 'react'
import CardList from '../CardList/CardList';


const ItemListContainer = () => {

    const [cards, setCards] = useState([]);

console.log("cards", cards)
useEffect(() => {
    fetch("./src/data/data.json")
    .then((response) => response.json())
    .then ((data) => setCards(data));
}, [])

    return (
    <div>  
        <CardList cards={cards}/> 
    </div>
    )
}

export default ItemListContainer