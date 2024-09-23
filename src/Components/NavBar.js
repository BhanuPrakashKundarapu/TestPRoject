import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 

const Navbar = () => {
  const navigate = useNavigate(); 

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className='nav-bar'>
      <h1>Test Commerce</h1>
      <div className='cart-dis' >Cart: {totalQuantity} items</div>
      <div>
        <h5 onClick={()=>navigate("/checkout")}>CheckOut</h5>
      </div>
    </nav>
  );
};

export default Navbar;
