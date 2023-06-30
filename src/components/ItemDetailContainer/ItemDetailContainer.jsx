import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../Services/firebase.config';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [productoElejido, setProductoElejido] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductById = async () => {
      try {
        const productRef = doc(collection(db, 'productos'), id);
        const productSnapshot = await getDoc(productRef);
        if (productSnapshot.exists()) {
          const productData = productSnapshot.data();
          setProductoElejido({ id: productSnapshot.id, ...productData });
        } else {
          console.log('No existe un producto con el ID especificado');
        }
      } catch (error) {
        console.log('Error al obtener el producto:', error);
      } finally {
        setLoading(false);
      }
    };

    getProductById();
  }, [id]);

  return (
    <div className='p-2'>
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        productoElejido && <ItemDetail item={productoElejido} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
