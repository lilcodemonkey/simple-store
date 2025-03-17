import React, { createContext, useContext, useState } from 'react';


const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); 

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); 
  };

  

  const clearCart = () => {
    setCart([]);
  };

  const setAllProducts = (products) => {
    setCart(products)
  }
  const onRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId)); // Remove item by ID
  };
  
 

  return (
    <CartContext.Provider value={{ cart, addToCart, onRemoveFromCart, clearCart, setAllProducts }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => {
  return useContext(CartContext); 
};
