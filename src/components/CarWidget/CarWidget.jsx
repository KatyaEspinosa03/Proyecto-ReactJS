import {useContext} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Button, Card } from "react-bootstrap";
import {CartContext} from '../Cartcontext/CartContext'
import { Dropdown, Container } from 'react-bootstrap';
import {BsTrash3} from 'react-icons/bs'



const CarWidget = ({cartItemsData}) => {
const { removeFromCart, totalQuantity } = useContext(CartContext);

    return (
        <div className="cart">
            <ShoppingCartIcon />
            <Badge className="bagde">{totalQuantity}</Badge>
            <Dropdown.Menu className='dropdown-menu'>
                {cartItemsData.length === 0 ? 
                (
                     <span className="cart-text"> El carrito está vacío </span>
                ) : (
                    cartItemsData.map((item) => (
                        <Container  key={item.id}>
                        <span>
                            <Card className="cart-item">
                            <Card.Img className="col-md-4" src={item.image} alt={item.artist}/>
                            <Button className="cart-btn" onClick={() => removeFromCart(item.id)}> <BsTrash3/> </Button>
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