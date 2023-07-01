import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../Services/firebase.config';
import { useCart } from '../../Context/CartContext';
import swal from 'sweetalert2';

const Formulario = ({ total, compra }) => { // Cambio en el nombre de la prop

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
      swal.fire("Error", "Por favor, completa todos los campos del formulario.", "error");
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

      swal.fire("¡Compra realizada!", "La compra se realizó con éxito. ID de compra: " + docRef.id, "success");

      vaciarCarrito();
    } catch (error) {
      console.log("Error al generar la compra:", error);
      swal.fire("Error", "Ocurrió un error al realizar la compra. Por favor, inténtalo nuevamente.", "error");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generarCompra({ buyer, items: compra, total }); // Cambio en el nombre de la prop
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

