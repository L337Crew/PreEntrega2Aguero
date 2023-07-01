import React from 'react';
import { useCart } from '../../Context/CartContext';
import CartProducts from '../CartProducts/CartProducts';
import Formulario from '../Formulario/Formulario';

const Cart = () => {
  const { carrito, vaciarCarrito, sacarDelCarrito, totalCarrito } = useCart();

  return (
    <div>
      <div>
        <h4 className='bg-dark text-light fs-1'>Carrito de compras</h4>
        {carrito.length === 0 ? (
          <p className='fs-1'>No hay productos en el carrito</p>
        ) : (
          <div className="container" style={{ height: '620px', display: 'flex', flexDirection: 'column' }}>
            <div className="row" style={{ flex: 1 }}>
              <div className="container col col-12 col-md-6 my-4 py-2 container-scroll" style={{ height: '600px', overflowY: 'auto' }}>
                {carrito.map((item, index) => (
                  <CartProducts key={index} item={item} quitar={sacarDelCarrito} />
                ))}
              </div>
              <div className="col col-12 col-md-6 py-2 my-4" style={{ height: '700px' }}>
                <Formulario total={totalCarrito(carrito)} compra={carrito} />
                <button onClick={vaciarCarrito} className="btn btn-danger my-5">
                  Vaciar carrito
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;




