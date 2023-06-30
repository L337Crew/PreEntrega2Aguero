import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from '../../Context/CartContext';
import { verSiExisteEnCarrito } from '../../Helpers/Helpers';

const ItemCount = ({ item }) => {
  const { carrito, agregarAlCarrito } = useCart();
  const [cantidad, setCantidad] = useState(1);

  let producto = item && {
    ...item,
    cantidad,
  };

  const alAgregarAlCarrito = () => {
    if (verSiExisteEnCarrito(carrito, item) || cantidad <= 0) return;
    agregarAlCarrito(producto);
  };

  const sumarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const restarCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div>
      {!verSiExisteEnCarrito(carrito, item) ? (
        <>
          <div className="row border my-4 mx-auto d-flex align-items-center">
            <div className="col col-3 d-flex">
              <button
                onClick={restarCantidad}
                className="btn px-4 mx-auto text-danger fs-2"
              >
                -
              </button>
            </div>
            <div className="col col-6 text-center fs-5">{cantidad}</div>
            <div className="col col-3 d-flex">
              <button
                onClick={sumarCantidad}
                className="btn  px-3 text-success mx-auto fs-2"
              >
                +
              </button>
            </div>
          </div>
          <button
            className="btn btn-warning w-100 my-3 text-uppercase"
            onClick={alAgregarAlCarrito}
          >
            agregar al carrito
          </button>
        </>
      ) : (
        <Link className="btn btn-success w-100 my-3 text-uppercase" to="/cart">
          ir al carrito
        </Link>
      )}

      <Link to="/" className="btn btn-dark w-100 my-3 text-uppercase">
        volver a comprar
      </Link>
    </div>
  );
};

export default ItemCount;
