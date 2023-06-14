import React from 'react'
import Card from '../Card/Card'

import {Link} from "react-router-dom";

const CardList = ({cards}) => {


return (
    <div className='card-list'>  
        {cards.map((card) => {
            return (
                <div  key={card.id}>
                    <Link to={`detail/${card.id}`} className="link-details">
                    <Card card={card}/>
                    </Link>
                </div>
            )
        })} 
    </div>
)
}

export default CardList