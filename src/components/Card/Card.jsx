
import React from 'react'

export const Card = ({card}) => {
  return (
    
    <div className="card" style="width: 18rem;">
  <img className="card-img-top" src={card.image} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{card.albumName}</h5>
    <p className="card-text">{card.artistName}{card.price}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

  )
}


export default Card