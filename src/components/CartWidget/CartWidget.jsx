import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cartwidget = () => {
  const [items, setItems] = useState([
    {
      id: "1",
      nombre: "Ryzen5600x",
      descripcion: "Procesador de gama media",
      imagen: "https://i.imgur.com/IsiY53k.jpg",
      categoria: "componentes",
      precio: "155000",
      marca: "Amd",
    },
  ]);
  return (
    <div className="cart-widget">
      <Link to="/Cart">
      <FaShoppingCart size={"25"} color={"white"} />
      <span className="cart-notification fs-4" style={{ color: "white" }}>
        {items.length}
      </span>
      </Link>
    </div>
  );
};

export default Cartwidget;

