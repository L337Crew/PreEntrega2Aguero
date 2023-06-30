import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import Navbar from '../components/Navbar/Navbar';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import { Home } from '../pages/Home';
import { Footer } from '../components/Footer/Footer';
import Cart from '../components/Cart/Cart';

const Rutas = () => {
  const navbar_items = [
    {
      path: "componentes",
      name: "Componentes"
    },
    {
      path: "perifericos",
      name: "Perifericos"
    }
  ];

  return (
    <Router>
      <Navbar navbar_items={navbar_items} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Rutas;


