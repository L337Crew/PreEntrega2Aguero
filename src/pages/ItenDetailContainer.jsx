import React from 'react'
import { useParams } from 'react-router-dom';
import {productos} from '../data'
import ItemDetail from '../components/ItemDetail';

const ItenDetailContainer = () => {
  const { id } = useParams();

  const productoElejido = productos.find(data => data.id === id);
  return (
    <div>
      <ItemDetail {...productoElejido}/>
    </div>
  )
}

export default ItenDetailContainer