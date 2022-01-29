import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/auth/login/Login';
import Register from './component/auth/register/Register';
import Private from './component/auth/private/Private';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Private />}> 
        <Route path="/main" element={<App />}/>
      </Route>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
