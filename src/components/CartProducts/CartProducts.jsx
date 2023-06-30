import React from "react";
import { useCart } from "../../Context/CartContext";
import { calcularSubtotal } from "../../Helpers/Helpers";

const CartProducts = ({item:{imagen,nombre,cantidad,precio,id}}) => {

  const {sacarDelCarrito} = useCart()
  const subtotal = calcularSubtotal(cantidad, precio);

  return (
    // <div classNameName="card mb-3 col col-sm-12 col-md-6 col-lg-4" style={{ maxWidth: "auto" }}>
    //   <div classNameName="row g-0">
    //     <div classNameName="col-md-5">
    //       <img src={imagen} classNameName="w-100 h-100" alt="..." />
    //     </div>
    //     <div classNameName="col-md-7">
    //       <div classNameName="card-body">
    //         <h5 classNameName="card-title">{nombre}</h5>
    //         <div classNameName="row my-2 border">
    //             <div classNameName="col col-10 text-uppercase">
    //                 cantidad 
    //             </div>
    //             <div classNameName="col col-2">{cantidad}</div>
    //         </div>
    //         <div classNameName="row my-2 border">
    //             <div classNameName="col col-7 text-uppercase">
    //                 precio
    //             </div>   
    //             <div classNameName="col col-5">ARS ${precio}</div>
    //         </div>
    //         <div>
    //         <div classNameName="row my-2 border">
    //           <div classNameName="col col-7 text-uppercase">subtotal</div>
    //           <div classNameName="col col-5">{subtotal}</div>
    //         </div>
    //         </div>
    //         <button onClick={()=>sacarDelCarrito(id)} classNameName="btn btn-danger text-uppercase mt-2 w-100">
    //             eliminar
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="card  " >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={imagen} className="img-fluid rounded-start" alt={nombre}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <div className="border text-uppercase">
          cantidad: {cantidad}
        </div>
        <div className="border text-uppercase">
          precio: {precio}
        </div>
        <div className="border text-uppercase">
          subtotal: {subtotal}
        </div>
          <button onClick={()=>sacarDelCarrito(id)} className="btn btn-danger text-uppercase mt-2 w-100">
               eliminar
          </button>
      </div>
    </div>
  </div>
</div>
  );
};

export default CartProducts;