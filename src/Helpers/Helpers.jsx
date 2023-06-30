
  export const verSiExisteEnCarrito = (carrito, item) => {
     return carrito.some((a) => a.id === item.id)
  };
  
  export const calcularSubtotal = (cantidad, precio) => {
    return cantidad * precio;
  };
 
  export const totalCarrito = (carrito) => {
    return carrito.reduce(( prev, curr ) => { return prev += curr.cantidad *curr.precio }, 0 )
  };

  export const validarForm = (campos) => {
    return campos.some((campo) => campo === "")
  };
