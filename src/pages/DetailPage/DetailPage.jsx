import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"


import Card from '../../components/Card/Card'


const DetailPage = () => {

    const[card, setCard] = useState({}) 

    let { id } = useParams();

    console.log(card)


    useEffect(() => {
      fetch(`../data.json`)
      .then((response) => response.json())
      .then ((data) => setCard(data.find((prod)=> prod.id === parseInt(id))));
  }, [id])
  

    
  return (
    <div className='card-detail'>
    <div style={{width:"45%"}}>
      <Card card={card} />
      </div>

        </div>
  )
}

export default DetailPage
