
import React,{useState, useContext} from 'react'
import {Link} from "react-router-dom";
import {CartContext} from '../Cartcontext/CartContext'


export const Card = ({card}) => {

const {addToCart} = useContext(CartContext);

const [counter, setCounter] = useState(1);

// funcion para poder sumar la cantidad de producto 
// si no hay más stock no permite seguir sumando
const addOn = () => {
  if (counter < card.stock){
  setCounter(counter + 1);
  } 
}

//funcion para bajar la cantidad de producto
// si la cantidad es 1 no puede seguir bajando
const substract = () => {
  if (counter != 1){
  setCounter(counter - 1);
  }
}

const handleAddToCart = () => {
  addToCart(card, counter);
}

//funcion para agregar productos al carrito

  return (

// plantilla de la tarjeta
<div className='card-group'>
    <div className='card'>
    <Link to={`detail/${card.id}`} className="link-details">
      <img className="card-img-top" src={card.image} alt="Card image cap" />
      </Link>
      <div className='card-body'>
      <Link to={`detail/${card.id}`} className="link-details">
        <h5 className='card-title'>{card.albumName}</h5>
        <p className='card-text'> {card.artistName} </p>
        </Link>
        <p className='card-text'> {card.price} </p>
      </div>
    <div className='card-footer text-center'>
      <div className='row button'>
        <div className='col'>
        <button onClick={addOn} type="button" className="btn">+</button>
        </div>
        <div className='col justify-content-center'>
        <h5 className="card-title"> {counter} </h5>
        </div>
        <div className='col justify-content-center'>
        <button onClick={substract} type="button" className="btn">-</button>
        </div>
    </div>
    <div className='row button justify-content-center'>
    <button type="button" className="btn cart-btn" onClick={handleAddToCart}> Agregar al carrito </button>
    </div>

    </div>
  </div>

</div>


  )
}


export default Card