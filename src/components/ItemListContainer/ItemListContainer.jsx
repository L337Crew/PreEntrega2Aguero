import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import 'bootstrap/dist/css/bootstrap.min.css';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase.config';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const { id } = useParams();
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const productsQuery = id ? query(collection(db, 'productos'), where('categoria', '==', id)) : query(collection(db, 'productos'));
        const querySnapshot = await getDocs(productsQuery);
        const productos = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setDatos(productos);
      } catch (error) {
        console.log('Error al obtener los productos:', error);
      } finally {
        setLoading(false);
      }
    };

    obtenerProductos();
  }, [id]);

  return (
    <>
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <div className="container">
          <div className="row">
            {datos.map((producto) => (
              <div key={producto.id} className="col-lg-3 p-2 mt-1 mb-5">
                <Item {...producto} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ItemListContainer;

