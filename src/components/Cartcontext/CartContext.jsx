import {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);

    const [cartItemsData, setCartItemsData] = useState([]);

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

    return (
        <CartContext.Provider value={{ cartItems, addToCart, cartItemsData, setCartItemsData }}>
          {children}
        </CartContext.Provider>
      );
    };
