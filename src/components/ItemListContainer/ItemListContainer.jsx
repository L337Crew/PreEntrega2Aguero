import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import 'bootstrap/dist/css/bootstrap.min.css';
import { productos } from '../../data';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const { id } = useParams();

 
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    
    const obtenerProductos = new Promise((resolve) => {
      resolve(productos);
    });

    obtenerProductos.then((productos) => {
     
      setDatos(productos);
    });
  }, []);

  const filtrado = id ? datos.filter((producto) => producto.categoria === id) : datos;
  console.log(filtrado);
  console.log(id);

  return (
    <>
      <div className="container">
        <div className="row">
          {filtrado.map((producto) => (
            <div key={producto.id} className="col-lg-3 p-2">
              <Item {...producto} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ItemListContainer;
