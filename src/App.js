import React from 'react';
import './App.css' 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './components/home';
import Cookies from './components/cookies';
import Politicas from './components/politicas';
import Header from './components/home/header/Header';
import Fotter from './components/fotter';
import Nosotros from './components/nosotros';
import Login from './components/login';
import Registrar from './components/registrar';
import Terminos from './components/terminos';
import CookieBanner from './components/cookibaner';
import Ofertas from './components/ofertas';
import Perfil from './components/perfil';
import Reservaciones from './components/reservaciones';
import VisuReservacion from './components/VisuReservacion';
import Productos2 from './components/producto2';
import Pedidos from './components/pedidos'; 





function App  (){
  return (
    <>
      <Router>
          <Header/>
          <Routes>
            <Route path="/"   element={<Home/>} />
            <Route path="/politicas" element={<Politicas />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/login" element={<Login />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/reservaciones" element={<VisuReservacion />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/productos" element={<Productos2/>} />
            <Route path="/ofertas" element={<Ofertas />} />
            <Route path="/registrar" element={<Registrar />} />
            <Route path="/terminos" element={<Terminos />} />
            <Route path="/pedidos" element={<Pedidos />} /> 
          </Routes>
          <Fotter/>
          <CookieBanner/> 
      </Router>
    </>
  );
};

export default App;
