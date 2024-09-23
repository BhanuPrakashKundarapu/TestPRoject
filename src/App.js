import React from 'react';
import './Styles/Components.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from './Redux/Store';
import Navbar from './Components/NavBar';
import HomePage from './Pages/Home';
import CheckoutPage from './Components/Checkout';
import LoginPage from './Pages/Login';

const App = () => {
  return (
    <Provider store={Store}>
       <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} /> 
        <Route path="/checkout" element={<CheckoutPage/>}/>
      </Routes>
    </Router>
    </Provider>
  );
};

export default App;
