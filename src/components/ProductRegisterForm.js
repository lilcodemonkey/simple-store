import React, { useState } from 'react';

const ProductRegisterForm = ({ addToCart }) => {
  const [productTitle, setProductTitle] = useState(''); 

  const handleChange = (event) => {
    setProductTitle(event.target.value); 
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    addToCart({ title: productTitle }); 
    setProductTitle(''); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={productTitle}
          onChange={handleChange} 
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ProductRegisterForm;
