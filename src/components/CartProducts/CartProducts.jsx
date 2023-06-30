import React from "react";
import { useCart } from "../../Context/CartContext";
import calcularSubtotal from '../../Context/CartContext'

const CartProducts = ({ item: { imagen, nombre, cantidad, precio, id } }) => {
  const { sacarDelCarrito } = useCart();
  const subtotal = calcularSubtotal(cantidad, precio);

  return (
    <div className="card">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={imagen} className="img-fluid rounded-start" alt={nombre} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="border text-uppercase">Cantidad: {cantidad}</div>
            <div className="border text-uppercase">Precio: {precio}</div>
            <div className="border text-uppercase">Subtotal: {subtotal}</div>
            <button
              onClick={() => sacarDelCarrito(id)}
              className="btn btn-danger text-uppercase mt-2 w-100"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
