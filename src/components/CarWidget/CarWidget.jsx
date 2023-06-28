import {useContext} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from "react-bootstrap";
import {CartContext} from '../Cartcontext/CartContext'

const CarWidget = () => {
const { cartItems } = useContext(CartContext);

const totalQuantity = cartItems.reduce((acc, prod)=> acc += prod.quantity, 0);

    return (
        <div className="car">
            <ShoppingCartIcon />
            <Badge className="bagde">{totalQuantity}</Badge>
        </div>
    );
};

export default CarWidget