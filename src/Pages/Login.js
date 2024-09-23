import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { Login } from '../Redux/authSlice';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const { user, error } = useSelector((state) => state.auth); 

  const predefinedCredentials = {
    username: 'emilys',
    password: 'emilyspass',
  };

  useEffect(() => {
    dispatch(Login(predefinedCredentials));
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      navigate('/home'); 
    }
  }, [user, navigate]); 
  return (
    <div>
      <h2>Logging In...</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>} 
    </div>
  );
};

export default LoginPage;
