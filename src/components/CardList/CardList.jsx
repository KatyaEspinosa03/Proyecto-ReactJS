import React from 'react'
import Card from '../Card/Card'

import {Link} from "react-router-dom";

const CardList = ({cards}) => {


return (
    <div className='card-list details'>  
        {cards.map((card) => {
            return (
                <div  key={card.id}>
                
                    <Card card={card}/>
                </div>
            )
        })} 
    </div>
)
}

export default CardList