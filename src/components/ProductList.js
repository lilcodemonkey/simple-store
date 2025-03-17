import React, { useEffect, useState } from 'react';
import { Grid2, Button} from '@mui/material'; 
import { useCart } from '../context/CartContext';

const ProductList = () => {

  const {cart,  onRemoveFromCart, setAllProducts } = useCart();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setAllProducts(data); 
      } catch (error) {
        console.error('Error fetching products:', error); 
      }
    };

    fetchProducts(); 
  }, []);

  return (
    <Grid2 container spacing={2}>
      {cart.map((product) => (
        <Grid2 item xs={12} sm={6} md={4} key={product.id}>
          <div>{product.title}</div>
          <Button onClick={() => onRemoveFromCart(product.id)} color="secondary">
          Remove from Cart
        </Button>
     
        </Grid2>
      ))}
    </Grid2>
  );
};

export default ProductList;
