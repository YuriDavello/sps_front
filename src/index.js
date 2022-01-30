import { BrowserRouter, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import Register from './component/auth/register/Register';
import Private from './component/auth/private/Private';
import Login from './component/auth/login/Login';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { UserProvider } from './component/context/user/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Private />} >
              <Route path="/app" element={<App />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
