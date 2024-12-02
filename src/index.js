import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/index.jsx';
import Calculadora from './pages/calculadora/index.jsx';
import Contato from './pages/contato/index.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={ <Home/> } path="/" />
        <Route element={ <Calculadora/> } path="/calculadora" />
        <Route element={ <Contato/> } path="/contato" />
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);
