
import React,{useState} from 'react'

export const Card = ({card}) => {

const [counter, setCounter] = useState(1);

const addOn = () => {
  if (counter < card.stock){
  setCounter(counter + 1);
  } 
}

const substract = () => {
  if (counter != 1){
  setCounter(counter - 1);
  }
}
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
        <button onClick={addOn} type="button" className="btn">+</button>
        </div>
        <div className='col justify-content-center'>
        <h5 className="card-title"> {counter} </h5>
        </div>
        <div className='col justify-content-center'>
        <button onClick={substract} type="button" className="btn">-</button>
        </div>

      </div>

    </div>
  </div>

</div>


  )
}


export default Card