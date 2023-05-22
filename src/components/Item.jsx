import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';

const Item = (props) => {
  const {titulo,descripcion,imagen, categoria, id} = props;
  return (
    <div className="card container-fluid" style={{width:'18rem'}}>
      <img src={imagen} className="card-img-top" alt={titulo}/>
      <div className="card-body">
        <h5 className="card-title text-danger">{titulo}</h5>
        <p className="card-text">{descripcion}</p>
        <div className='pb-1'>
          <Link to={`${categoria.id}`} style={{ textDecoration: 'none', color:'secondary' }}>
            {categoria.name}
          </Link>
        </div>
        <button type="button" className="btn btn-secondary">
         <Link to={`item/${id}`} style={{ textDecoration: 'none', color:'white' }}>
           Ver mas
         </Link>
        </button>
      </div>
   </div>
  )
}

export default Item