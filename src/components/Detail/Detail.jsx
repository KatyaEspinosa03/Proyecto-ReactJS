import React,{useState, useContext} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Button } from 'react-bootstrap';
import {CartContext} from '../Cartcontext/CartContext'
import {toast} from "react-toastify"



const Detail = ({card}) => {

    const {addToCart} = useContext(CartContext);

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

      const handleAddToCart = () => {
        addToCart(card, counter);
        toast("El producto se agregó al carrito")
      
      }
  return (
 <Container>
    <Row className='mb-3'>
        <Col xs={5} className="image">
            <Image src={card.image} alt={card.albumName} className="img-fluid"/>
        </Col>
        <Col xs={2} className="title">
            <h3 > {card.artistName} </h3>
            <h4 > {card.albumName} </h4>
            <h4 > {card.price} </h4>
        </Col>
        <Col xs={4} className="description">
            <h4> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati ipsum labore quibusdam expedita. Dicta vel sapiente molestias earum! Incidunt voluptas id laboriosam deleniti modi qui architecto exercitationem cum magni sed.</h4>
        </Col>
    </Row>
    <Row className='mt-3'>
        <Col xs={1}/>
        <Col xs={1}>
            <Button onClick={substract} className="detail-btn"> - </Button>
        </Col>
        <Col xs={1}>
            <h5 className='description'> {counter}</h5>
        </Col>
        <Col xs={1}>
            <Button onClick={addOn} className="detail-btn"> + </Button>
        </Col>
    </Row>
    <Row className='mt-3'>
    <Col xs={1} />
    <Col xs={3}>
            <Button onClick={handleAddToCart} className="detail-btn last-btn"> Agregar al carrito </Button>
        </Col>
    </Row>
 </Container>
  )
}

export default Detail