import React from 'react';
import {Button} from '@mui/material'
import Card from '@mui/material/Card';


const ProductCard = ({product, onRemoveFromCart}) => {

    return (
        <Card >
            <div>{product.title}</div>
            <Button onClick={() => onRemoveFromCart(product.id)} color="secondary">
                Remove from Cart
            </Button>
        
        </Card>
      
   
    )
}

export default ProductCard;
