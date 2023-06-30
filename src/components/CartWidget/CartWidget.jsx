import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from '../../Context/CartContext';

const Cartwidget = () => {
  const { carrito } = useCart();

  return (
    <div className="cart-widget pe-3">
      <Link to="/Cart">
        <FaShoppingCart size={"25"} color={"white"} />
        <span className="cart-notification fs-5 text-decoration-none" style={{ color: "white" }}>
          {carrito.length}
        </span>
      </Link>
    </div>
  );
};

export default Cartwidget;

