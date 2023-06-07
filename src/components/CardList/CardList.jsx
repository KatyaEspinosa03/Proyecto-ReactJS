import React from 'react'
import Card from '../Card/Card'


const CardList = ({cards}) => {


return (
    <div>  
        {cards.map((card) => {
            return (
                <div key={card.id}>
                    <Card card={card}/>
                </div>
            )
        })} 
    </div>
)
}

export default CardList