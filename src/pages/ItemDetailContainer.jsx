import React from 'react'
import { useParams } from 'react-router-dom';
import {productos} from '../data'
import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();

  const productoElejido = productos.find(data => data.id === id);
  return (
    <div className='p-2'>
      <ItemDetail {...productoElejido}/>
    </div>
  )
}

export default ItemDetailContainer