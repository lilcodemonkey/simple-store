import React, { useEffect, useState } from 'react';
import { Grid2, Button} from '@mui/material'; 
import { useCart } from '../context/CartContext';
import ProductCard from './ProductCard'
import ProductRegisterForm from './ProductRegisterForm'
import './ProductList.css'

const ProductList = () => {

  const {cart,  onRemoveFromCart, setAllProducts, addToCart } = useCart();
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
    <div className="shop-container">
    <Grid2 container spacing={2}>
      {cart.map((product) => (
        <Grid2 item xs={12} sm={6} md={4} key={product.id}>
          <ProductCard product={product} onRemoveFromCart={onRemoveFromCart} />
         
     
        </Grid2>
      ))}

    </Grid2>
          <ProductRegisterForm addToCart={addToCart}/>
          </div>
  );
};

export default ProductList;
