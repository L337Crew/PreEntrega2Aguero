import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({item}) => {
  
  return (
    <div className="card container-fluid" style={{ width: '300px' }}>
      <img src={item.imagen} className="card-img-top" alt={item.nombre} />
      <div className="card-body">
        <h5 className="card-title text-primary">{item.nombre}</h5>
        <p className="card-text">{item.descripcion}</p>
        <p>{item.categoria}</p>
        <p className='text-success fs-5'>Precio: ${item.precio}</p>
      </div>
      <div>
        <ItemCount item={item}/>
      </div>
    </div>
  );
};

export default ItemDetail;
