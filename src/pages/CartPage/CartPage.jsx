import {useContext} from 'react';
import { CartContext } from '../../components/Cartcontext/CartContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Button } from 'react-bootstrap';
import {BsTrash3} from 'react-icons/bs'
import FormModal from '../../components/FormModal/formModal';


const CartPage = () => {

  const {cartItems, totalQuantity, removeFromCart} = useContext(CartContext);


  const removeSymbols = (price) => {
    return parseFloat(price.replace(/\$|,/g, ""));
  };

  const calculateTotalAmount = () => {
    let total = 0
    cartItems.forEach((item) => { 
      const itemTotal = item.quantity * removeSymbols(item.product.price);
      total += itemTotal
    })
    return total;
  }



  return (
    <Container className='cart-page'>
      {cartItems.length === 0 ? (
        <p> El carrito está vacio</p>
      ) : (
        <div>
          <h4> Cantidad de productos: {totalQuantity}</h4>

          {cartItems.map((item) => (
            <Row key={item.product.id} className="mb-3">
              <Col xs={2}>
                <Image src={item.product.image} alt = {item.product.albumName} className="img-fluid"></Image>
              </Col>
              <Col xs={6}>
                <h3 className='title'> {item.product.artistName}</h3>
                <h4> {item.product.albumName}</h4>
              </Col>
              <Col xs={2}>
              <h5> {item.product.price}</h5>
                <h5> {item.quantity}</h5>
                <h5> Total = {item.quantity * removeSymbols(item.product.price)}</h5>
              </Col>
              <Col xs={2}>
              <Button className="cart-btn" onClick={() => removeFromCart(item.product.id)}> <BsTrash3/> </Button>
              </Col>
            </Row>
          ))}
          <Row className='mt-3'>
              <Col xs={8}/>
              <Col xs={4} className="text-end">
                <h4 className='title'> Total = {calculateTotalAmount()}</h4>
              </Col>
          </Row>

          <Row className='mt-3'>
              <Col xs={8}/>
              <Col xs={4} className="text-end">
                <FormModal />
              </Col>
          </Row>
        </div>
      )}
    </Container>

  )
}

export default CartPage