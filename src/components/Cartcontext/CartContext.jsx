import {createContext, useState, useEffect} from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);

    const [cartItemsData, setCartItemsData] = useState([]);

    const [totalQuantity, setTotalQuantity] = useState(0)

    const addToCart = (product, quantity) => {

      const existingItemIndex = cartItems.findIndex((item) => item.product.id === product.id);

      if(existingItemIndex !== -1){
        const updatedCart = [...cartItems];
        updatedCart[existingItemIndex].quantity += quantity;
        setCartItems(updatedCart);
      } else {
        const newItem = {product, quantity}
        const updatedCart = [...cartItems, newItem];
        setCartItems(updatedCart);
      }

      const itemData = {
        artist: product.artistName,
        album: product.albumName,
        image: product.image,
        price: product.price,
      };
      setCartItemsData([...cartItemsData, itemData])
    };

    const removeFromCart = (productId) => {
      const updatedCart = cartItems.filter((item) => item.product.id !== productId);
      setCartItems(updatedCart)
      const updatedCartitemsData = cartItemsData.filter((item)=> item.productId !== productId);
      setCartItemsData(updatedCartitemsData);
    }

    useEffect(() => {
      const calculateTotalQuantity = () =>{
        const quantity = cartItems.reduce((acc, prod) => acc += prod.quantity, 0);
        setTotalQuantity(quantity)
      };
      calculateTotalQuantity();
    }, [cartItems]);


    return (
        <CartContext.Provider value={{ cartItems, addToCart, cartItemsData, setCartItemsData, removeFromCart, totalQuantity}}>
          {children}
        </CartContext.Provider>
      );
    };
