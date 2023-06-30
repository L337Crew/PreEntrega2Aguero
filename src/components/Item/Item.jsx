import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Item = ({nombre, imagen, descripcion, precio, marca, categoria, id}) => {
  
  const navigate = useNavigate();

  const handleVerMasClick = () => {
    navigate(`/itemDetail/${id}`);
    
  };

  return (
    <div className="card container " style={{ width: 'auto', height: '100%' }}>
      <img
        src={imagen}
        className="card-img-top"
        alt={nombre}
        style={{ objectFit: 'contain', height: '200px', maxHeight: '100%' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-danger">{nombre}</h5>
        <p className="card-text">{descripcion}</p>
        <p>{marca}</p>
        <p>{categoria}</p>
        <button type="button" className="btn btn-secondary mt-auto" onClick={handleVerMasClick}>
          Ver mas
        </button>
      </div>
    </div>
  );
};

export default Item;


