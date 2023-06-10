import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

const Item = (props) => {
  const { nombre, descripcion, imagen, categoria, id } = props;
  const navigate = useNavigate();

  const handleVerMasClick = () => {
    navigate(`item/${id}`);
  };

  return (
    <div className="card container-fluid my-5" style={{ width: '18rem' }}>
      <img src={imagen} className="card-img-top" alt={nombre} />
      <div className="card-body ">
        <h5 className="card-title text-danger">{nombre}</h5>
        <p className="card-text">{descripcion}</p>
        <div className='pb-1'>
          <Link to={`${categoria.id}`} style={{ textDecoration: 'none', color: 'secondary' }}>
            {categoria.name}
          </Link>
        </div>
        <button type="button" className="btn btn-secondary" onClick={handleVerMasClick}>
          Ver más
        </button>
      </div>
   </div>
  );
};

export default Item;
