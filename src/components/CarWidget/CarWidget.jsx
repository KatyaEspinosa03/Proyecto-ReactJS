import {useContext} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from "react-bootstrap";
import {CartContext} from '../Cartcontext/CartContext'

const CarWidget = () => {
const { cartItems } = useContext(CartContext);

const totalQuantity = cartItems.length;

    return (
        <div className="car">
            <ShoppingCartIcon />
            <Badge className="bagde">{totalQuantity}</Badge>
        </div>
    );
};

export default CarWidget