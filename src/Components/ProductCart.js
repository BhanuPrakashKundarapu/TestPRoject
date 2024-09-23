import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <div className='content'>

      <h3>{product.title}</h3>
      <span>{product.description}</span>
      <span>Price: ${product.price}</span>
      <div>
      <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      </div>
    </div>
    
  );
};

export default ProductCard;
