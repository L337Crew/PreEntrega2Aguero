import React, { createContext, useContext, useState } from 'react';
import { useGlobalContext } from './GlobalContext';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const { setMostrarAlerta } = useGlobalContext();
  const [carrito, setCarrito] = useState([]);

  const verSiExisteEnCarrito = (carrito, item) => {
    return carrito.some((a) => a.id === item.id);
  };

  const calcularSubtotal = (cantidad, precio) => {
    return cantidad * precio;
  };

  const totalCarrito = (carrito) => {
    return carrito.reduce((prev, curr) => {
      return (prev += curr.cantidad * curr.precio);
    }, 0);
  };

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
        verSiExisteEnCarrito,
        calcularSubtotal,
        totalCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;


