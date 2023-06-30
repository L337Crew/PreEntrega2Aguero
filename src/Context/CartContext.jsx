// CartProvider.js
import React, { createContext, useContext, useState } from 'react';
import { verSiExisteEnCarrito } from '../Helpers/Helpers';
import { useGlobalContext } from './GlobalContext';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const { setMostrarAlerta } = useGlobalContext();
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item) => {
    if (verSiExisteEnCarrito(carrito, item)) {
      setCarrito((carrito) => [...carrito, item]);
      setMostrarAlerta(true);
      return;
    }
    setCarrito([...carrito, item]);
    setMostrarAlerta(true);
  };

  const sacarDelCarrito = (id) => {
    let nuevoCarrito = carrito.filter((e) => e.id !== id);
    setCarrito(nuevoCarrito);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        sacarDelCarrito,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

