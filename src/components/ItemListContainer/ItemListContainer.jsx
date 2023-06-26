
import React, {useState, useEffect} from 'react'
import CardList from '../CardList/CardList';
import {useParams} from 'react-router-dom'


const ItemListContainer = () => {

    const [cards, setCards] = useState([]);

    const { search }= useParams();

console.log("cards", cards)

useEffect(() => {
    fetch("/data.json")
    .then((response) => response.json())
    .then ((data) => {
        if(search){
            const foundItems = data.filter((item) => item.artistName === search);
            if (foundItems.length > 0){
                setCards(foundItems)
            } else{
                console.log("item not found")
            }
        } else{
            setCards(data)
        }
    });
}, [search])

    return (
    <div>  
        <CardList cards={cards}/> 
    </div>
    )
}

export default ItemListContainer