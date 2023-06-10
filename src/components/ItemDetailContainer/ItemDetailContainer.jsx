import React from 'react'
import { useParams } from 'react-router-dom';
import {productos} from '../../data'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();

  const productoElejido = productos.find(producto => producto.id === id);
  return (
    <div className='p-2'>
      <ItemDetail {...productoElejido}/>
    </div>
  )
}

export default ItemDetailContainer