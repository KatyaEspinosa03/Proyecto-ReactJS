import React from 'react'
import Card from '../Card/Card'


const CardList = ({cards}) => {


// se hace el map para que se pueda generar más de una tarjeta de acuerdo a la información del json
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