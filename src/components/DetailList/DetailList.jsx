import React from 'react'
import Detail from '../Detail/Detail'

const DetailList = ({card}) => {
    return (
        <div>  
            {card.map((card) => {
                return (
                    <div  key={card.id}>
                        <Detail card={card}/>
                    </div>
                )
            })} 
        </div>
    )
}

export default DetailList