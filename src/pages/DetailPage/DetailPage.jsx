import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"

import Card from '../../components/Card/Card'


const DetailPage = () => {

    const[card, setCard] = useState({}) 

    let { id } = useParams();

    console.log(card)


    useEffect(() => {
        fetch(`/data.json/${id}`)
        .then((response) => response.json())
        .then ((data) => setCard(data));
    }, [id])
    
  return (
    <div>
      <Card card={card} />

        </div>
  )
}

export default DetailPage

 {/* {card.id ? <Card card={card}/> : null} */}