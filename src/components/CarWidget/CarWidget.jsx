import {useContext} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Button, Card } from "react-bootstrap";
import {CartContext} from '../Cartcontext/CartContext'
import { Dropdown, Container } from 'react-bootstrap';
import {BsTrash3} from 'react-icons/bs'


const CarWidget = ({cartItemsData}) => {
const { cartItems } = useContext(CartContext);

const totalQuantity = cartItems.reduce((acc, prod)=> acc += prod.quantity, 0);

    return (
        <div className="car">
            <ShoppingCartIcon />
            <Badge className="bagde">{totalQuantity}</Badge>
            <Dropdown.Menu className='dropdown-menu'>
                {cartItemsData.length === 0 ? 
                (
                     <span className="cart-text"> El carrito está vacío </span>
                ) : (
                    cartItemsData.map((item, index) => (
                        <Container>
                        <span key={index}>
                            <Card className="cart-item">
                            <Card.Img className="col-md-4" src={item.image} alt={item.artist}/>
                            <Card.Body className="col-md-8">
                            <Card.Title className="cart-title">{item.artist}</Card.Title>
                            <Card.Subtitle>{item.album}</Card.Subtitle>
                            <Card.Subtitle>{item.price}</Card.Subtitle>
                            <Button className="cart-btn"> <BsTrash3/> </Button>
                            </Card.Body>

                            </Card>
                             
                        </span>
                        </Container>
                    ))
                )}
            </Dropdown.Menu>
        </div>
    );
};

export default CarWidget