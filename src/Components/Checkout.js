import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 

const CheckoutPage = () => {
  const navigate = useNavigate(); 

  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className='checkout'>
    <button className='navgh' onClick={()=>navigate("/home")}>Home</button>
    <div className='huj'>
      <h2>Checkout</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.title} - Quantity: {item.quantity} - Price: ${item.price}
          </li>
        ))}
      </ul>
      <h3>Total Price: ${totalPrice}</h3>
      <button>Buy</button>
    </div>
    </div>
);
};

export default CheckoutPage;
