
import {useParams} from "react-router-dom"
import { useEffect, useState } from "react"
import Card from "../../components/Card/Card";

const Category = () => {
    const [cards, setCards] = useState([]);
    let { categoryId } = useParams();

    console.log(categoryId)

    let filteredCards = cards.filter((card) =>{

        return card.category === categoryId;

    })
    useEffect(() => {
        fetch(`../data.json`)
        .then((response) => response.json())
        .then ((data) => setCards(data));
    }, [])

  return (
    <div className='card-list details'>  
    {filteredCards.map((card) => {
        return (
            <div  key={card.id}>
                <Card card={card}/>
            </div>
        )
    })} 
</div>
  )
}

export default Category