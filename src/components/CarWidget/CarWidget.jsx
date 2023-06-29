import {useContext} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Button, Card } from "react-bootstrap";
import {CartContext} from '../Cartcontext/CartContext'
import { Dropdown, Container } from 'react-bootstrap';
import {BsTrash3} from 'react-icons/bs'
import {Link} from 'react-router-dom';




const CarWidget = ({cartItems}) => {

const { removeFromCart, totalQuantity } = useContext(CartContext);

    return (
        <div className="cart ">
            <ShoppingCartIcon />
            <Badge className="bagde">{totalQuantity}</Badge>
            <Dropdown.Menu className='dropdown-menu text-center'>
                {cartItems.length === 0 ? 
                (
                     <span className="cart-text"> El carrito está vacío </span>
                ) : (
                    cartItems.map((item) => (
                        <Container  key={item.product.id}>
                        <span>
                            <Card className="cart-item">
                            <Card.Img className="col-md-4" src={item.product.image} alt={item.product.artist}/>
                            <Button className="cart-btn" onClick={() => removeFromCart(item.product.id)}> <BsTrash3/> </Button>
                            </Card>
                        </span>
                        </Container>
                    ))
                )}
                  <span>
                    <Link to="/cart">
                 <Button className="go-cart-btn "> Ver Carrito </Button>
                     </Link>
                    </span>
            </Dropdown.Menu>
        </div>
    );
};

export default CarWidget