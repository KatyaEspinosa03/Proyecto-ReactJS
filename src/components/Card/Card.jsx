
import React from 'react'

export const Card = ({card}) => {
  return (


<div className='card-group'>
    <div className='card'>
      <img className="card-img-top" src={card.image} alt="Card image cap" />
      <div className='card-body'>
        <h5 className='card-title'>{card.albumName}</h5>
        <p className='card-text'> {card.artistName} </p>
        <p className='card-text'> {card.price} </p>
      </div>
    <div className='card-footer'>
      <div className='row button'>
        <div className='col justify-content-center'>
        <button type="button" className="btn">+</button>
        </div>
        <div className='col justify-content-center'>
        <h5 className="card-title"> 1 </h5>
        </div>
        <div className='col justify-content-center'>
        <button type="button" className="btn">-</button>
        </div>

      </div>

    </div>
  </div>

</div>


  )
}


export default Card