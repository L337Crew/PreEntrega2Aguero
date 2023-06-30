import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../Services/firebase.config';
import { useCart } from '../../Context/CartContext'

const Formulario = ({ total, compras }) => {
  const { vaciarCarrito } = useCart();

  const [buyer, setBuyer] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyer({ ...buyer, [name]: value });
  };

  const generarCompra = async ({ buyer, items, total }) => {
    if (
      buyer.nombre.trim() === "" ||
      buyer.apellido.trim() === "" ||
      buyer.email.trim() === "" ||
      buyer.telefono.trim() === ""
    ) {
      alert("Por favor, completa todos los campos del formulario.");
      return;
    }

    try {
      const compra = {
        buyer: buyer,
        items: items,
        total: total,
      };

      const docRef = await addDoc(collection(db, "compras"), compra);
      console.log("ID de compra generado:", docRef.id);

      alert("La compra se realizó con éxito. ID de compra: " + docRef.id);

      vaciarCarrito();
    } catch (error) {
      console.log("Error al generar la compra:", error);
      alert("Ocurrió un error al realizar la compra. Por favor, inténtalo nuevamente.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generarCompra({ buyer, items: compras, total });
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="column">
        <div className="col mb-3">
          <input
            type="text"
            className="form-control"
            name="nombre"
            placeholder="Nombre"
            value={buyer.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="col mb-3">
          <input
            type="text"
            className="form-control"
            name="apellido"
            placeholder="Apellido"
            value={buyer.apellido}
            onChange={handleChange}
          />
        </div>
        <div className="col mb-3">
          <input
            type="text"
            className="form-control"
            name="email"
            placeholder="Email"
            value={buyer.email}
            onChange={handleChange}
          />
        </div>
        <div className="col mb-3">
          <input
            type="number"
            className="form-control"
            name="telefono"
            placeholder="Telefono"
            value={buyer.telefono}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="border border-success border-5 text-success fs-4 ">
        <p>TOTAL: ${total}</p>
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Finalizar Compra
      </button>
    </form>
  );
};

export default Formulario;


