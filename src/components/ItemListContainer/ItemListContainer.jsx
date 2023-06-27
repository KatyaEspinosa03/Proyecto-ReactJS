
import React, {useState, useEffect} from 'react'
import CardList from '../CardList/CardList';
import {useParams} from 'react-router-dom'


const ItemListContainer = () => {

    const [cards, setCards] = useState([]);

    const { search }= useParams();

// recupero la información del json
useEffect(() => {
    fetch("/data.json")
    .then((response) => response.json())
    .then ((data) => {
        // condicional para saber si search se llamo, si es asi se hace un filtro para encontrar el producto de acuerdo al nombre
        if(search){
            const foundItems = data.filter((item) => item.artistName === search);
            // si los resultados encontrados fueron más de cero se generan las tarjetas
            if (foundItems.length > 0){
                setCards(foundItems)
            } else{
                console.log("item not found")
            }
            // si no se llama a search entonces se generan todas las tarjetas
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