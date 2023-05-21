import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';

const ItemDetail = (props) => {
  const {titulo,descripcion,imagen, categoria, precio} = props;
  return (
    <div className="card container-fluid" style={{width:'18rem'}}>
      <img src={imagen} className="card-img-top" alt={titulo}/>
      <div className="card-body">
        <h5 className="card-title text-primary">{titulo}</h5>
        <p className="card-text">{descripcion}</p>
        <Link to={`${categoria.id}`}>
          {categoria.name}
        </Link>
        <p>precio: ${precio}</p>
      </div>
   </div>
  )
}

export default ItemDetail